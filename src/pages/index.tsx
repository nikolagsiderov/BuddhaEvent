import Waves from "../components/effects/Waves";
import Hero from "../components/left/Hero";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div id="homescreen" className="relative">
      <Head>
        <title>Sofia Sound of Pulse</title>
        <meta
          name="description"
          content="Sofia Sound of Pulse"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Waves />
      <div className="w-full h-full relative p-6 lg:p-16">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
