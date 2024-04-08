import { ArrowUpIcon, CosmosAtomIcon } from "@/components/icons";
import LineGraph from "@/components/ui/line-graph";
import { useOverviewQuery } from "@/hooks/useOverview";
import {
  formatCurrency,
  formatNumber,
  timeAgo,
  truncateHash,
} from "@/utils/common.utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion as m } from "framer-motion";
import { useBlockQuery, usetopBlockQuery } from "@/hooks/useBlock";
import CopyIcon from "@/components/icons/copy.icon";

type CardProps = {
  heading?: string;
  value?: string;
};

export const Card = ({ heading, value }: CardProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-muted text-sm font-medium"> {heading}</h3>
      <div className="text-foreground text-2xl font-semibold">{value}</div>
    </div>
  );
};

export const MarketDataCard = () => {
  const { priceChart, price } = useOverviewQuery();

  return (
    <div className="grid lg:grid-cols-2">
      <div className="w-full flex flex-col gap-2 pt-3">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <CosmosAtomIcon className="h-10 w-10" />
            <h1 className="text-foreground text-2xl font-semibold">ATOM</h1>
          </div>
          <h1 className="text-primary text-2xl font-semibold">
            ${price.latestPrice}
          </h1>
        </div>
        <div className="w-full flex justify-end">
          <div className="flex gap-2 items-center">
            {price.priceChange24 !== 0 && (
              <ArrowUpIcon
                className={`${
                  price.priceChange24 > 0
                    ? "text-primary"
                    : "text-red-800 rotate-180"
                } h-5 w-5`}
              />
            )}
            <h1 className="text-foreground text-md">
              {formatNumber(price.priceChange24, 2)}% (24h)
            </h1>
          </div>
        </div>
        <div className="w-full flex justify-between items-center text-foreground text-sm">
          <h1>Market Cap</h1>
          <h1>{formatCurrency(price.marketCap, 0)}</h1>
        </div>
        <div className="w-full flex justify-between items-center text-foreground text-sm">
          <h1>24h volume</h1>
          <h1>{formatCurrency(price.volume24, 0)}</h1>
        </div>
      </div>
      <div className="">
        <LineGraph chartData={priceChart} />
      </div>
    </div>
  );
};

export const ValidatorCard = () => {
  const { validatorStats, validatorPercent } = useOverviewQuery();
  return (
    <div className="h-full flex flex-col justify-between gap-6">
      <h1 className="text-muted text-sm font-medium">Active Validator</h1>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-foreground text-2xl font-semibold">
          <h3>
            {validatorStats.active} out of {validatorStats.total}
          </h3>
          <h3>{validatorPercent}%</h3>
        </div>
        <div className="relative h-3 w-full bg-accent rounded-full">
          <m.div
            initial={{ width: 0 }}
            animate={{ width: `${validatorPercent}%` }}
            transition={{ duration: 1 }}
            className="absolute h-full bg-[#5be49b] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export const BlockCard = () => {
  const { blockTime } = useOverviewQuery();
  const { latestBlock, chainId } = useBlockQuery();
  return (
    <div className="h-full flex justify-evenly">
      <div className="flex flex-col items-center justify-between h-full gap-5">
        <h1 className="text-muted text-sm font-medium">Latest Block</h1>
        <h3 className="text-[#5be49b] text-2xl font-semibold">{latestBlock}</h3>
      </div>
      <div className="flex flex-col items-center justify-between h-full gap-5">
        <h1 className="text-muted text-sm font-medium">Block Time</h1>
        <h3 className="text-foreground text-2xl font-semibold">{blockTime}s</h3>
      </div>
      <div className="flex flex-col items-center justify-between h-full">
        <h1 className="text-muted text-sm font-medium">Chain</h1>
        <h3 className="text-foreground text-2xl font-semibold">{chainId}</h3>
      </div>
    </div>
  );
};

export const BlocksTableCard = () => {
  const { topBlocksData } = useBlockQuery();

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
    <div>
      <div>Top 10 Latest Blocks</div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-neutral-600 w-[100px]">Height</TableHead>
            <TableHead className="text-neutral-600 w-[300px]">Hash</TableHead>
            <TableHead className="text-neutral-600">Proposer</TableHead>
            <TableHead className="text-neutral-600 text-center w-[100px]">
              Txs
            </TableHead>
            <TableHead className="text-neutral-600">Time</TableHead>
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
                  <span className="text-primary">{block.proposer.moniker}</span>
                </div>
              </TableCell>
              <TableCell className="text-center">{block.txs}</TableCell>
              <TableCell>{timeAgo(block.time)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
