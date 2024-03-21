"use client";
import { Checkbox, Input, Upload } from "@/components";
import { NextPage } from "next";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const CreateMembership: NextPage = () => {
  const [name, setName] = useState<String>("");
  const [description, setDescription] = useState<String>("");
  const [supply, setSupply] = useState<Number>(0);
  const [image, setImage] = useState<string | StaticImport>("");
  const [price, setPrice] = useState<Number>(0);
  const [maxSupplyFlag, setMaxSupplyFlag] = useState<Boolean>(false);

  return (
    <>
      <Head>
        <title>Create Memberships</title>
        <meta name="description" content="camp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div className="flex pt-36 pb-20 md:pt-32 md:pb-6 lg:py-28 justify-center items-center max-w-[800px] mx-auto">
        <form className="flex flex-col space-y-5 w-[90%] md:max-w-[600px] mx-auto">
          <div className="flex flex-row items-center justify-center space-x-2 mb-5">
            <Upload
              id="image"
              name="image"
              label="Image"
              type="file"
              onChange={(e) => {}}
            />
            <Image
              className="mx-auto rounded-lg"
              src={image !== "" ? image : "/preview.png"}
              alt="preview"
              width={200}
              height={200}
            />
          </div>
          <Input
            id="name"
            name="name"
            label="Name"
            placeholder="Azuki Elementals"
            type="text"
            onChange={(e) => setName(e.target.value)}
            helper="This Can Be Your DAO Name or Special Access Collection"
          />
          <Input
            id="description"
            name="description"
            label="Description"
            placeholder="Azuki Memberships"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            helper="Write Something About This NFT Collection or Features"
          />
          <Checkbox
            id="maxSupplyFlag"
            name="maxSupplyFlag"
            label="Set Max Supply (Optional)"
            onChange={(e) => setMaxSupplyFlag(e.target.checked)}
          />
          {maxSupplyFlag && (
            <Input
              id="supply"
              name="supply"
              label="Max Supply"
              placeholder="0"
              type="number"
              onChange={(e) => setSupply(e.target.value)}
            />
          )}
          <Input
            id="price"
            name="price"
            label="Price"
            placeholder="0.05"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            helper="Recommend to set membership price (in ETH)"
          />
          <button
            onClick={async (e) => {
              e.preventDefault();
            }}
            className="w-full text-[#fffff] bg-secondary hover:bg-secondary/90 rounded-lg px-5 py-2.5 text-center font-medium shadow"
          >
            Create Membership 🚀
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateMembership;
