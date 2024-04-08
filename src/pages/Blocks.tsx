import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { timeAgo, truncateHash } from "@/utils/common.utils";
import { useState } from "react";
import { motion as m } from "framer-motion";
import { useBlockQuery } from "@/hooks/useBlock";
import CopyIcon from "@/components/icons/copy.icon";
import { motionVariants } from "@/config/animation.config";

const ITEM_INCREMENT = 20;

const headers = [
  { text: "Height", width: "100px", align: "center" },
  { text: "Hash", width: "300px" },
  { text: "Proposer" },
  { text: "txs", align: "center" },
  { text: "Time" },
];

const Blocks = () => {
  const [visibleCount, setVisibleCount] = useState(20);
  const { topBlocksData, loadingBlocks, errorBlocks } =
    useBlockQuery(visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEM_INCREMENT);
  };

  const handleCopy = (textToCopy: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      const msg = successful ? "Copied successfully!" : "Failed to copy!";
      onCopy?.(msg);
    } catch (err) {
      onCopy?.("Failed to copy!");
    } finally {
      document.body.removeChild(textArea);
    }
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
          <TableCaption className="text-muted">
            {loadingBlocks
              ? "Loading blocks..."
              : errorBlocks
              ? "Failed to load blocks"
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
            {topBlocksData?.map((block) => (
              <TableRow key={block.height}>
                <TableCell className="font-medium text-primary">
                  {block.height}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div
                      onClick={() => handleCopy(block.hash)}
                      className="cursor-pointer"
                    >
                      <CopyIcon />
                    </div>
                    <span>{truncateHash(block.hash)}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src={block.proposer.avatar}
                      alt="proposer"
                      className="h-6 w-6 rounded-full"
                    />
                    <span className="text-primary">
                      {block.proposer.moniker}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center">{block.txs}</TableCell>
                <TableCell>{timeAgo(block.time)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center mt-4">
        {!loadingBlocks &&
          !(
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

export default Blocks;
