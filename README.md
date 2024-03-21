# NFT Membership Marketplace - Coinvise
This is an assignment repo of NFT memberships for creators and buyers leveraging a few benefits and criteria. 

## 🧩 Prerequisites & Manual Setup

You must have a wallet to interact with this project. Check out how to create a Metamask wallet from [here](https://metamask.io). Get some ETH on Base Sepolia to test our cool things [here](https://www.alchemy.com/faucets/base-sepolia). 

Follow the instructions for the local environment: The user must have Node.js and pnpm to run this platform. Just download Node.js from [here](https://nodejs.org/en/download/).

### Highlights

This project includes contracts and a Next.js App (App routing) that demonstrates the following features. Contracts: `NFT.sol` is the implementation of ERC1155 with custom specifications and `Launchpad.sol` is the main contract using which creators can ship NFT Memberships. The contract is deployed on [Base Sepolia](https://base-sepolia.blockscout.com/address/0x8e646c314fe1D98b619f46767ee3119F7e7Fb7ae).

1. The app is completely on-chain. The metadata and files are being stored on IPFS using nft.storage. Here, data is handled via smart contract or IPFS. Other ways to handle the extra benefits can also be implemented simply using a database (Redis/Supa). 

2. Approximate USD price chip for creators can be easily implemented using Coingecko or exchange API to get real-time price feed. Due to my other commitments, I haven't worked on this.

3. I have used pure tailwind to build this UI and components. Overall, it enhances the build and caching by reducing dependencies.

**BONUS POINTS - Reference**

- [Search component](https://github.com/neel-ds/camp/blob/main/src/app/campaigns/Search.tsx): Query helps to find similar NFT membership name nvm. Added a few filter categories: Like Lens Holder or Minimum supply [here](https://github.com/neel-ds/camp/blob/main/src/app/campaigns/Search.tsx#L55) - I haven't implemented filter benefits completely due to my workspace commitments but provided solution. 

- Creators can set criteria: This idea is cool and I have tried to cover it statically. Ownership of specific NFTs can be checked easily using Moralis API. Creators need to provide NFT contract address and network. [solution](https://github.com/neel-ds/camp/blob/main/src/app/campaigns/Search.tsx#L60)

- Allows can be set in the contract while creating a membership or store the address list in Redis mapped with `nftAddress` JSON. While minting, it can check if allowist is enabled for that particular membership.

- The minimum balance required for the mint can be easily set in the contract. [solution](https://github.com/neel-ds/camp/blob/main/contracts/contracts/NFT.sol#L71). The solution has `nftprice` as min balance by default to allow mint. 

- Ideally, membership can be minted only once. [solution](https://github.com/neel-ds/camp/blob/main/contracts/contracts/NFT.sol#L74)

## 🛠️ Local Setup Instructions

**Clone the repo via CLI:**

```sh
git clone https://github.com/neel-ds/camp.git
cd camp
```

**Install the required packages:**

```sh
pnpm install
```

**Add required environment variables mentioned in `.env.example` file**

```sh
touch .env.local  #Paste env variables in this file and your values
```

**In the project directory, you can run:**

```sh
pnpm dev
```

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**In the terminal, you can run: [OPTIONAL]**

If you wish to deploy a contract using hardhat, check [documentation](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start) or simply use [Remix](https://remix.ethereum.org/)

Install ngrok in your system and do the needful config to run your app locally and test in [Frames Validator](https://warpcast.com/~/developers/frames). 
```sh
ngrok http http://localhost:3000
```
Check out [Ngrok docs](https://ngrok.com/docs/getting-started/) for more details.

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
