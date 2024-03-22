"use client";
/* eslint-disable @next/next/no-img-element -- To avoid img element warning */
import { Campaigns } from "@/configs";
import { NFT_ABI } from "@/configs/abi";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { parseEther } from "viem";
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";

const Card = ({ name, price, image, nftAddress }: Campaigns) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { address } = useAccount();
  const { data, writeContract, status, error } = useWriteContract();
  const { isSuccess, status: isValid } = useWaitForTransactionReceipt({
    hash: data,
  });

  const handleMint = async () => {
    setIsLoading(true);
    if (address) {
      writeContract({
        account: address,
        address: nftAddress as `0x${string}`,
        abi: NFT_ABI,
        functionName: "nftMint",
        value: parseEther(price),
      });
    } else {
      setIsLoading(false);
      toast.error("Please connect the wallet", {
        style: {
          borderRadius: "10px",
        },
      });
    }
  };

  useEffect(() => {
    if (status === "success" && isSuccess && isValid === "success") {
      setIsLoading(false);
      toast.success("Purchase Successful", {
        style: {
          borderRadius: "10px",
        },
      });
    } else if (status === "error") {
      setIsLoading(false);
      console.log(error);
      const message = error.toString();
      const regex = /Error: ([A-Z_]+)\(\)/;
      const match = message.match(regex);
      if (match && match.length > 1) {
        if (match[1] === "ALREADY_MINTED") {
          toast("You are already own this membership", {
            icon: "🧙🏻‍♂️",
            style: {
              borderRadius: "10px",
            },
          });
        } else {
          toast.error("Something went wrong", {
            style: {
              borderRadius: "10px",
            },
          });
        }
      } else {
        toast.error("Something went wrong", {
          style: {
            borderRadius: "10px",
          },
        });
      }
    }
  }, [status, isSuccess, error, isValid]);

  return (
    <div className="flex flex-col w-fit bg-[#141414] bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-xl shadow-md p-6">
      <img
        src={image}
        alt={name}
        width={300}
        height={300}
        className="object-fill bg-primary rounded-xl"
      />
      <h2 className="text-xl text-secondary font-primary font-medium truncate mt-3">
        {name}
      </h2>
      <span className="flex flex-row justify-between items-center">
        <p className="text-gray-300 font-primary font-normal">{price} ETH</p>
        <button
          onClick={() => {
            handleMint();
          }}
          className="bg-gradient-to-br from-[#ffd84b] from-[20%] to-[#b67e2b] hover:from-[#ffd643] hover:from-[20%] hover:to-[#c18d40] font-primary font-medium items-center rounded-lg px-5 py-1.5 disabled:opacity-70 disabled:cursor-progress"
          disabled={isLoading}
        >
          Mint
        </button>
      </span>
    </div>
  );
};

export default Card;
