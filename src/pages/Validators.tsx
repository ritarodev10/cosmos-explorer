import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useValidatorQuery } from "@/hooks/useValidator";
import { formatNumber } from "@/utils/common.utils";
import React, { useState } from "react";
import { motion as m } from "framer-motion";
import { motionVariants } from "@/config/animation.config";

const ITEM_INCREMENT = 20;

const headers = [
  { text: "Rank", width: "100px", align: "center" },
  { text: "Validator", width: "300px", align: "left" },
  { text: "Status", width: "300px", align: "center" },
  { text: "Shares", align: "center" },
  { text: "Commision", align: "center" },
];

const Validators = () => {
  const { validatorQueryData, isLoading, isError } = useValidatorQuery();
  const [visibleCount, setVisibleCount] = useState(ITEM_INCREMENT);
  const [statusFilter, setStatusFilter] = useState("BOND_STATUS_BONDED");

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEM_INCREMENT);
  };

  const filteredData = validatorQueryData?.validatorData.filter((item) => {
    return item.status === statusFilter;
  });

  const visibleData = filteredData?.slice(0, visibleCount);

  return (
    <m.div
      variants={motionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`relative z-20 rounded-2xl bg-[#0e0e0e] border border-accent p-6`}
    >
      <Tabs defaultValue="active" className="w-[400px]">
        <TabsList className={`bg-accent`}>
          <TabsTrigger
            onClick={() => setStatusFilter("BOND_STATUS_BONDED")}
            value="active"
          >
            <span
              className={
                statusFilter === "BOND_STATUS_BONDED"
                  ? "text-foreground"
                  : "text-neutral-600"
              }
            >
              Active
            </span>
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setStatusFilter("BOND_STATUS_UNBONDED")}
            value="innactive"
          >
            <span
              className={
                statusFilter === "BOND_STATUS_BONDED"
                  ? "text-neutral-600"
                  : "text-foreground"
              }
            >
              Inactive
            </span>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Table>
        <TableCaption className="text-muted">
          {isLoading
            ? "Loading validators..."
            : isError
            ? "Failed to load validators"
            : ""}
        </TableCaption>
        <TableHeader>
          <TableRow>
            {headers.map((header, idx) => (
              <TableHead
                key={idx}
                className={`text-neutral-600 ${
                  header.align ? `text-${header.align}` : ""
                } ${header.width ? `w-[${header.width}]` : ""}`}
              >
                {header.text}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {visibleData?.map((data, idx) => (
            <TableRow key={data.rank}>
              <TableCell className="font-medium text-center">
                {idx + 1}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <img
                    src={data.icon}
                    alt="proposer"
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="text-primary">{data.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <span
                  className={`${
                    data.status !== "BOND_STATUS_BONDED" && "text-neutral-600"
                  } text-xs border rounded-full px-2 py-1 border-accent`}
                >
                  {data.status === "BOND_STATUS_BONDED" ? "Active" : "Inactive"}
                </span>
              </TableCell>
              <TableCell className="text-center">
                {formatNumber(data.votingPowerPercent, 2)}%
              </TableCell>
              <TableCell className="text-center">
                {formatNumber(data.commission, 2)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center mt-4">
        {!isLoading && (
          <button
            onClick={handleViewMore}
            className="px-4 py-2 bg-accent rounded-lg text-sm hover:text-primary"
          >
            View More
          </button>
        )}
      </div>
    </m.div>
  );
};

export default Validators;
