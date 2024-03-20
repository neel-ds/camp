"use client";
import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";
import { useRouter } from "next/navigation";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>camp</title>
        <meta name="description" content="camp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main className="flex px-10 lg:px-24 pt-36 md:pt-32 lg:py-28 xl:py-20 justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-left">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl sm:text-5xl mx-auto lg:mx-0 md:text-6xl text-gray-900 font-extrabold">
              <span className="text-white/80 font-primary tracking-tight xl:inline">
                Welcome to <br />
              </span>
              <span className="text-transparent font-primary tracking-tight bg-clip-text bg-gradient-to-b from-[#ffd84b] from-[20%] to-[#b67e2b]">
                camp
              </span>
              <span className="flex text-secondary/90 font-medium text-2xl mt-5">
                Collection of NFT memberships
              </span>
            </h1>
            <p className="mt-3 text-base text-white/70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Check out all available memberships at one place. Get your first
              NFT membership now!
            </p>
            <div className="flex items-center justify-center mx-auto lg:mx-0 w-[50%] md:w-[60%] lg:w-[50%] xl:w-[40%] mt-8 md:mt-6">
              <button
                onClick={() => {
                  router.push("/campaigns");
                }}
                className="flex w-full items-center justify-center px-8 py-3 border-0 border-transparent text-base font-medium rounded-3xl bg-secondary shadow-lg md:py-2 md:text-lg md:px-8"
              >
                Mint now
              </button>
            </div>
          </div>
          <div className="flex w-[100%] sm:w-[70%] md:w-[80%] lg:w-[70%] xl:w-[65%] justify-center items-center">
            <Image
              src="/mintAsset.png"
              width="600"
              height="450"
              className="ml-10"
              alt="asset"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
