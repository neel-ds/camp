"use client";
import { Card } from "@/components";
import { NextPage } from "next";
import Head from "next/head";

const dummy = [
  {
    name: "Campaign 1",
    price: "0.05 ETH",
  },
  {
    name: "Campaign 2",
    price: "0.1 ETH",
  },
  {
    name: "Campaign 3",
    price: "0.15 ETH",
  },
  {
    name: "Campaign 4",
    price: "0.2 ETH",
  },
  {
    name: "Campaign 5",
    price: "0.25 ETH",
  },
  {
    name: "Campaign 6",
    price: "0.3 ETH",
  },
  {
    name: "Campaign 7",
    price: "0.35 ETH",
  },
  {
    name: "Campaign 8",
    price: "0.4 ETH",
  },
  {
    name: "Campaign 9",
    price: "0.45 ETH",
  },
  {
    name: "Campaign 10",
    price: "0.5 ETH",
  },
];

const Campaigns: NextPage = () => {
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
        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
          {dummy.map((item, index) => (
            <Card key={index} name={item.name} price={item.price} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Campaigns;
