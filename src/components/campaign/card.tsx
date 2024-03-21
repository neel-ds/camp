import Image from "next/image";
import React from "react";

interface ICard {
  name: string;
  price: string;
}

const Card = ({ name, price }: ICard) => {
  return (
    <div className="flex flex-col w-fit bg-[#141414] bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-xl shadow-md p-6">
      <Image
        src="/mintAsset.png"
        alt={name}
        width={300}
        height={300}
        className="object-fill bg-primary rounded-xl"
      />
      <h2 className="text-xl text-secondary font-primary font-medium truncate mt-3">
        {name}
      </h2>
      <span className="flex flex-row justify-between items-center">
        <p className="text-gray-300 font-primary font-normal">{price}</p>
        <button className="bg-gradient-to-br from-[#ffd84b] from-[20%] to-[#b67e2b] hover:from-[#ffd643] hover:from-[20%] hover:to-[#c18d40] font-primary font-medium items-center rounded-lg px-5 py-1.5">
          Mint
        </button>
      </span>
    </div>
  );
};

export default Card;
