import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { formatTimestamp } from "@/utils/common.utils";
import { useState } from "react";
import { motion as m } from "framer-motion";
import { useProposalQuery } from "@/hooks/useProposal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motionVariants } from "@/config/animation.config";

const ITEM_INCREMENT = 20;

const headers = [
  { text: "ID", width: "100px", align: "center" },
  { text: "Title", width: "350px", align: "left" },
  { text: "Type" },
  { text: "Status", align: "center" },
  { text: "Voting End" },
];

const Proposals = () => {
  const { proposalQueryData, isLoading, isError } = useProposalQuery();
  const [visibleCount, setVisibleCount] = useState(ITEM_INCREMENT);
  const [statusFilter, setStatusFilter] = useState("all");

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEM_INCREMENT);
  };

  const reversedData = [...proposalQueryData.proposalData]?.reverse();

  const filteredData = reversedData.filter((item) => {
    if (statusFilter === "all") return true;
    return item.status === statusFilter;
  });

  const visibleData = filteredData.slice(0, visibleCount);

  return (
    <m.div
      variants={motionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`relative z-20 rounded-2xl bg-[#0e0e0e] border border-accent p-6`}
    >
      <Tabs defaultValue="all" className="w-[600px]">
        <TabsList className={`bg-accent`}>
          <TabsTrigger onClick={() => setStatusFilter("all")} value="all">
            <span
              className={
                statusFilter === "BOND_STATUS_BONDED"
                  ? "text-foreground"
                  : "text-neutral-600"
              }
            >
              All
            </span>
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setStatusFilter("VotingPeriod")}
            value="voting"
          >
            <span
              className={
                statusFilter === "VotingPeriod"
                  ? "text-neutral-600"
                  : "text-foreground"
              }
            >
              Voting Period
            </span>
          </TabsTrigger>
          <TabsTrigger onClick={() => setStatusFilter("Passed")} value="passed">
            <span
              className={
                statusFilter === "Passed"
                  ? "text-neutral-600"
                  : "text-foreground"
              }
            >
              Passed{" "}
            </span>
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setStatusFilter("Rejected")}
            value="rejected"
          >
            <span
              className={
                statusFilter === "Rejected"
                  ? "text-neutral-600"
                  : "text-foreground"
              }
            >
              Rejected
            </span>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Table>
        <TableCaption className="text-muted">
          {isLoading
            ? "Loading proposals..."
            : isError
            ? "Failed to load proposals"
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
          {visibleData?.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="font-medium text-center">
                {data.id}
              </TableCell>
              <TableCell>{data.title}</TableCell>
              <TableCell>{data.type}</TableCell>
              <TableCell className="text-center">
                <span
                  className={`${
                    data.status === "Passed"
                      ? "text-primary"
                      : data.status === "Rejected"
                      ? "text-red-500"
                      : "text-amber-500"
                  } text-xs border rounded-full px-2 py-1 border-accent`}
                >
                  {data.status}
                </span>
              </TableCell>
              <TableCell>{formatTimestamp(data.votingEnd)} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center mt-4">
        {!isLoading && visibleData.length > 10 && (
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

export default Proposals;
