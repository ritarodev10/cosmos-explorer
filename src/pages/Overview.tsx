import { useOverviewQuery } from "@/hooks/useOverview";
import { motion as m } from "framer-motion";
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
          initial={{ opacity: 0, y: 200 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              opacity: {
                duration: 0.5,
                ease: "easeInOut",
                delay: idx * 0.05,
              },
              y: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: idx * 0.05,
              },
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            transition: {
              opacity: {
                duration: 0.2,
                ease: "easeInOut",
              },
              scale: {
                duration: 0.5,
              },
            },
          }}
          className={`${content.gridConfig} rounded-2xl bg-[#0e0e0e] border border-accent p-6`}
        >
          <content.component {...content.props} />
        </m.div>
      ))}
    </div>
  );
};

export default Overview;
