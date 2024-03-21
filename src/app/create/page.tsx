"use client";
import { Checkbox, Input, Upload } from "@/components";
import { NextPage } from "next";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NFTStorage } from "nft.storage";
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { parseEther } from "viem";
import { LAUNCHPAD_ABI, LAUNCHPAD_ADDRESS } from "@/configs";
import toast from "react-hot-toast";

const CreateMembership: NextPage = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [supply, setSupply] = useState<number>(10);
  const [image, setImage] = useState<string | StaticImport>("");
  const [price, setPrice] = useState<number>(0);
  const [maxSupplyFlag, setMaxSupplyFlag] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isImageUploading, setIsImageUploading] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const NFT_STORAGE_TOKEN = process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN as string;
  const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });
  const { address } = useAccount();

  const { data, writeContract, status, error } = useWriteContract();
  const { isSuccess, status: isValid } = useWaitForTransactionReceipt({
    hash: data,
  });

  useEffect(() => {
    if (status === "success" && isSuccess && isValid === "success") {
      setIsLoading(false);
      toast.success("Membership Created Successfully", {
        style: {
          borderRadius: "10px",
        },
      });
    } else if (status === "error") {
      setIsLoading(false);
      toast.error("Something went wrong", {
        style: {
          borderRadius: "10px",
        },
      });
    }
  }, [status, isSuccess, isValid]);

  const handleCreateMembership = async () => {
    setIsLoading(true);
    const metadata = {
      name: name,
      description: description,
      image: imageUrl,
    };

    await client
      .storeDirectory([new File([JSON.stringify(metadata)], "metadata.json")])
      .then((cid) => {
        writeContract({
          account: address,
          address: LAUNCHPAD_ADDRESS,
          abi: LAUNCHPAD_ABI,
          functionName: "createNFT",
          args: [
            `https://${cid}.ipfs.dweb.link/metadata.json`,
            supply,
            maxSupplyFlag,
            parseEther(price.toString()),
            address,
          ],
        });
      });
  };

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
              type="file"
              onChange={(e) => {
                setIsImageUploading(true);
                const image = URL.createObjectURL(e.target.files[0]);
                setImage(image);
                const file = e.target.files;
                client.storeDirectory(file).then((cid) => {
                  setImageUrl(`https://${cid}.ipfs.w3s.link/${file[0].name}`);
                  setIsImageUploading(false);
                });
              }}
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
              if (!address) {
                toast.error("Please connect your wallet", {
                  icon: "🔗",
                  style: {
                    borderRadius: "10px",
                  },
                });
                return;
              }
              if (name && description && price && imageUrl) {
                await handleCreateMembership();
              } else {
                toast("Please fill all the fields", {
                  icon: "🚧",
                  style: {
                    borderRadius: "10px",
                  },
                });
              }
            }}
            className="w-full text-[#fffff] bg-secondary hover:bg-secondary/90 rounded-lg px-5 py-2.5 text-center font-medium shadow disabled:opacity-75 disabled:cursor-progress"
            disabled={isImageUploading || isLoading}
          >
            {isImageUploading
              ? "Uploading Image..."
              : isLoading
              ? "Creating NFT membership..."
              : "Create Membership 🚀"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateMembership;
