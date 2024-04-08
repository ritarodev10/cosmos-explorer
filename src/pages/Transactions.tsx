import CopyIcon from "@/components/icons/copy.icon";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motionVariants } from "@/config/animation.config";
import useTransaction from "@/hooks/useTransaction";
import { motion as m } from "framer-motion";
import React from "react";

const headers = [
  { text: "Height", width: "100px" },
  { text: "Hash", width: "300px", align: "left" },
  { text: "Fees" },
];

const Transactions = () => {
  const { transactionData } = useTransaction();

  const handleCopy = (textToCopy: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  };
  return (
    <m.div
      variants={motionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`relative z-20 rounded-2xl bg-[#0e0e0e] border border-accent p-6`}
    >
      <div>
        <Table>
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
            {transactionData?.map((data, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium text-primary">
                  {data.height}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div
                      onClick={() => handleCopy(data.hash)}
                      className="cursor-pointer"
                    >
                      <CopyIcon />
                    </div>
                    <span>{data.hash}</span>
                  </div>
                </TableCell>
                <TableCell>{data.fees} ATOM</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </m.div>
  );
};

export default Transactions;
