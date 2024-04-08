// Market Data Type
export type MarketDataParams = {
  vs_currency: string;
  days: number;
};

export type MarketDataResult = {
  prices: NumberData[];
  market_caps: NumberData[];
  total_volumes: NumberData[];
};

type NumberData = [number, number];

export type PriceChartDataType = {
  prices: number[];
  dates: string[];
};

// Validator Data Type
export type ValidatorResponseData = {
  operator_address: string;
  hex_address: string;
  account_address: string;
  consensus_address: string;
  consensus_pubkey: {
    "@type": string;
    key: string;
  };
  jailed: boolean;
  status: string;
  tokens: string;
  moniker: string;
  identity: string;
  avatar: string;
  commission: string;
  cummulative_share: number;
  voting_power_percent: number;
  rank: number;
  uptime: number;
};

export type ValidatorData = {
  rank: number;
  name: string;
  icon: string;
  votingPower: number;
  votingPowerPercent: number;
  commission: number;
  uptime: number;
  status: string;
  shares: number;
};

// Block Data Type
export type BlockResponseData = {
  block_id: BlockId;
  block: Block;
};

type BlockId = {
  hash: string;
  part_set_header: PartSetHeader;
};

type PartSetHeader = {
  total: number;
  hash: string;
};

type Header = {
  version: Version;
  chain_id: string;
  height: string;
  time: string;
  last_block_id: BlockId;
  last_commit_hash: string;
  data_hash: string;
  validators_hash: string;
  next_validators_hash: string;
  consensus_hash: string;
  app_hash: string;
  last_results_hash: string;
  evidence_hash: string;
  proposer_address: string;
};

type Version = {
  block: string;
  app: string;
};

type Block = {
  header: Header;
  data: Data;
};

type Data = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  txs: any;
};

export type PriceDataResponse = {
  price: number;
  pricechange24h: number;
  marketcap: number;
  totalvolume: number;
  timestamp: string;
};

export type BlockTime = {
  secs: number;
};

export type ValidatorStats = {
  active: number;
  total: number;
};

export type CommunityPool = {
  denom: string;
  amount: string;
};

export type StakingPool = {
  not_bonded_tokens: string;
  bonded_tokens: string;
};

export type Supply = { denom: string; amount: string };

type Proposer = {
  address: string;
  moniker: string;
  avatar: string;
};

export type BlockData = {
  hash: string;
  height: number;
  time: string;
  proposer: Proposer;
  txs: number;
};

// Proposal Data Type
type FinalTallyResult = {
  yes: number;
  abstain: number;
  no: number;
  no_with_veto: number;
  finally_votes: boolean;
};

type TotalDeposit = {
  amount: number;
  denom: string;
};

export type ProposalResponse = {
  id: number;
  ttype: string;
  details: Record<string, unknown>;
  finalTallyResult: FinalTallyResult;
  title: string;
  description: string;
  votingStart: string;
  votingEnd: string;
  depositEnd: string;
  submitTime: string;
  status: string;
  totalDeposit: TotalDeposit;
  proposer: Proposer;
};

export type ProposalData = {
  id: number;
  title: string;
  type: string;
  status: string;
  votingEnd: string;
};

// Transaction Data Type
export type TransactionData = {
  height: string;
  hash: string;
  fees: number;
};
