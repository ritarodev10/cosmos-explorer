import {
  BlockIcon,
  DashboardIcon,
  ProposalIcon,
  TransactionIcon,
  ValidatorIcon,
} from "../components/icons";

export const sidebarItems = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
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
];
