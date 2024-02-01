import Main from "../components/index/Main";
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
      <div className="w-full h-full relative p-6 lg:p-16">
        <Main />
      </div>
    </div>
  );
};

export default Home;
