import { useOverviewQuery } from "@/hooks/useOverview";
import { AnimatePresence, motion as m } from "framer-motion";
import {
  BlockCard,
  BlocksTableCard,
  Card,
  MarketDataCard,
  TokenomicsCard,
  ValidatorCard,
} from "@/components/modules/overview/CardContent";
import { motionVariants } from "@/config/animation.config";

const Overview = () => {
  const { inflation, stakingAPR, supply, communityPool } = useOverviewQuery();

  const CardContents = [
    {
      title: "Market Cap",
      gridConfig: "xl:col-span-8",
      component: MarketDataCard,
    },
    {
      title: "Tokenomics",
      gridConfig: "xl:col-span-4",
      component: TokenomicsCard,
    },
    {
      title: "Validator Stats",
      gridConfig: "xl:col-span-6",
      component: ValidatorCard,
    },
    {
      title: "Latest Block",
      gridConfig: "xl:col-span-6",
      component: BlockCard,
    },
    {
      title: "Inflation",
      gridConfig: "xl:col-span-3",
      component: Card,
      props: { heading: "Inflation", value: inflation + "%" },
    },
    {
      title: "Staking APR",
      gridConfig: "xl:col-span-3",
      component: Card,
      props: { heading: "Staking APR", value: stakingAPR + "%" },
    },
    {
      title: "Supply",
      gridConfig: "xl:col-span-3",
      component: Card,
      props: { heading: "Supply", value: supply + "M ATOM" },
    },
    {
      title: "Community Pool",
      gridConfig: "xl:col-span-3",
      component: Card,
      props: { heading: "Community Pool", value: communityPool + "M ATOM" },
    },
    {
      title: "Blocks Table",
      gridConfig: "xl:col-span-12",
      component: BlocksTableCard,
    },
  ];

  return (
    <div className="relative z-20 grid gap-4 lg:grid-cols-12 md:gap-5">
      {CardContents.map((content, idx) => (
        <m.div
          key={idx}
          variants={motionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`${content.gridConfig} rounded-2xl bg-[#0e0e0e] border border-accent p-6`}
        >
          <content.component {...content.props} />
        </m.div>
      ))}
    </div>
  );
};

export default Overview;
