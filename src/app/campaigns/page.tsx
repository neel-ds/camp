"use client";
import { Card } from "@/components";
import { LAUNCHPAD_ABI, LAUNCHPAD_ADDRESS } from "@/configs";
import type { CampaignData, Campaigns } from "@/configs";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { formatEther } from "viem";
import { useReadContract } from "wagmi";

const ExploreCampaigns: NextPage = () => {
  const [campaigns, setCampaigns] = useState<Campaigns[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { data, isFetched } = useReadContract({
    address: LAUNCHPAD_ADDRESS,
    abi: LAUNCHPAD_ABI,
    functionName: "getAllNFTsWithMetadata",
  });

  const fetchData = async () => {
    let nfts = [];
    for (let nft of data as CampaignData[]) {
      const response = await fetch(nft.uri);
      const pd = await response.json();
      nfts.push({
        name: pd.name,
        description: pd.description,
        image: pd.image,
        price: formatEther(BigInt(nft.nftPrice)),
      });
    }
    console.log(nfts);
    setCampaigns(nfts);
    setIsLoading(false);
  };

  useEffect(() => {
    if (data && isFetched) {
      console.log(data);
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isFetched]);

  return (
    <>
      <Head>
        <title>Campaigns</title>
        <meta name="description" content="camp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div className="flex flex-col w-full pt-36 pb-20 md:pt-32 md:pb-6 lg:py-28 px-10 md:px-24">
        <h1 className="text-2xl md:text-3xl text-gray-200 font-primary font-medium">
          Explore campaigns 🛰️
        </h1>
        {isLoading ? (
          <div className="flex flex-col mt-5 w-fit bg-[#141414] bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-xl shadow-md p-6">
            <div className="animate-pulse flex flex-col space-x-4">
              <div className="rounded-xl bg-neutral-700/80 h-48 w-[12rem]"></div>
              <div className="block h-4 mt-5 items-start bg-gray-400 rounded w-3/4"></div>
              <div className="flex flex-row justify-between mt-2">
                <div className="h-6 w-16 bg-gray-300/80 rounded"></div>
                <div className="h-8 w-20 bg-primary/50 rounded-lg"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
            {campaigns.length === 0 ? (
              <p className="text-secondary text-lg">
                No active NFT memberships yet.
              </p>
            ) : (
              campaigns.map((item, index) => (
                <Card
                  key={index}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ExploreCampaigns;
