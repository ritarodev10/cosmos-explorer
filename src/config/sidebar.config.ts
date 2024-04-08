import {
  BlockIcon,
  OverviewIcon,
  ProposalIcon,
  TransactionIcon,
  ValidatorIcon,
} from "../components/icons";

export const sidebarItems = [
  {
    path: "/overview",
    name: "Overview",
    icon: OverviewIcon,
  },
  {
    path: "/validators",
    name: "Validators",
    icon: ValidatorIcon,
  },
  {
    path: "/blocks",
    name: "Blocks",
    icon: BlockIcon,
  },
  {
    path: "/proposals",
    name: "Proposals",
    icon: ProposalIcon,
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon: TransactionIcon,
  },
];
