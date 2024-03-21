export const LAUNCHPAD_ADDRESS = "0x6Ee34B8404b16F5CaB2f7862b20629a6F2b76469";

export interface CampaignData {
  uri: string;
  nftPrice: string;
  supply: string;
  creator: string;
  launchPadNftAddress: string;
  nftAddress: string;
}

export interface Campaigns {
  name: string;
  description: string;
  image: string;
  price: string;
}
