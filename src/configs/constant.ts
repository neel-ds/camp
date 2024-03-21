export const LAUNCHPAD_ADDRESS = "0x8e646c314fe1D98b619f46767ee3119F7e7Fb7ae";

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
  nftAddress: string;
}
