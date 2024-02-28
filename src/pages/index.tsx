import Main from "../components/index/Main";
import type { NextPage } from "next";
import Head from "next/head";
import VideoPlayer from "../components/VideoPlayer";
import { motion } from "framer-motion";
import { useRef } from "react";

const Home: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="homescreen" className="relative">
      <Head>
        <title>Sofia Sound of Pulse</title>
        <meta name="description" content="Sofia Sound of Pulse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="bg-image" className="w-full h-full relative p-6 lg:p-16">
        <Main scrollAction={handleClick} />
      </div>
      <div
        ref={ref}
        id="rest"
        className="w-full h-full relative p-6 lg:p-16 flex flex-col gap-16"
      >
        <motion.div
          className="flex flex-col items-start justify-start gap-4"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0, scale: 1 },
            hidden: { opacity: 0.5, y: 300, scale: 0.5 },
          }}
        >
          <span className="text-xl lg:text-6xl lg:tracking-widest leading-tight font-black">
            <span className="text-white lg:text-white/80">
              <span className="text-moon/50">DAY 1: </span>SUNRISE FOREST FEST
            </span>
          </span>
          <span className="text-md lg:text-lg lg:tracking-wide leading-tight font-semibold">
            <span className="text-white lg:text-white/80">
              Our first day kicks off with a Music festival in the heart of the
              Vitosha mountains near the Boyana waterfall with a multi-stage
              event alongside a panoramic view of the city of Sofia.
            </span>
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-sm lg:text-xl lg:tracking-wide leading-tight font-semibold">
              <span className="text-white lg:text-white/80">
                Main stage: Dance/EDM
              </span>
            </span>
            <span className="text-sm lg:text-xl lg:tracking-wide leading-tight font-semibold">
              <span className="text-white lg:text-white/80">
                Side stage 1: Hip Hop/ R&B
              </span>
            </span>
            <span className="text-sm lg:text-xl lg:tracking-wide leading-tight font-semibold">
              <span className="text-white lg:text-white/80">
                Side stage 2: Rock/ Indie
              </span>
            </span>
            <span className="text-sm lg:text-xl lg:tracking-wide leading-tight font-semibold">
              <span className="text-white lg:text-white/80">
                Side stage 3: Contemporary/ Alternative
              </span>
            </span>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col items-start justify-start gap-4"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0, scale: 1 },
            hidden: { opacity: 0.5, y: 300, scale: 0.5 },
          }}
        >
          <span className="text-xl lg:text-6xl lg:tracking-widest leading-tight font-black">
            <span className="text-white lg:text-white/80">
              <span className="text-moon/50">DAY 2: </span>
              <span className="text-blue-600">AME</span>
              <span className="text-white">RI</span>
              <span className="text-red-600">CAN</span> DREAM
            </span>
          </span>
          <span className="text-md lg:text-lg lg:tracking-wide leading-tight font-semibold">
            <span className="text-white lg:text-white/80">
              Dive into the heart of the American spirit with a day dedicated to
              exploring the cultural, musical, and culinary diversity of the
              USA. From the streets of New York to the shores of California,
              experience the dream that has captivated the world.
            </span>
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-sm lg:text-xl lg:tracking-wide leading-tight font-semibold">
              <span className="text-white lg:text-white/80">
                Main Stage: Coast to Coast Sounds
              </span>
            </span>
            <span className="text-sm lg:text-xl lg:tracking-wide leading-tight font-semibold">
              <span className="text-white lg:text-white/80">
                Interactive Experiences
              </span>
            </span>
            <span className="text-sm lg:text-xl lg:tracking-wide leading-tight font-semibold">
              <span className="text-white lg:text-white/80">
                Cuisine Corner: A Taste of America
              </span>
            </span>
            <span className="text-sm lg:text-xl lg:tracking-wide leading-tight font-semibold">
              <span className="text-white lg:text-white/80">
                Late Night: American Dream Party
              </span>
            </span>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col items-start justify-start gap-4"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0, scale: 1 },
            hidden: { opacity: 0.5, y: 300, scale: 0.5 },
          }}
        >
          <span className="text-xl lg:text-6xl lg:tracking-widest leading-tight font-black">
            <span className="text-white lg:text-white/80">
              <span className="text-moon/50">DAY 3: </span>LATE NIGHT:{" "}
              <span className="">CODE </span>
              <span className="text-red-800">RED</span>
            </span>
          </span>
          <span className="text-md lg:text-lg lg:tracking-wide leading-tight font-semibold">
            <span className="text-white lg:text-white/80">
              Dive into the electric heart of the night with LATE NIGHT: CODE
              RED, an immersive experience designed to captivate the senses and
              elevate the spirit. Featuring a lineup of internationally
              acclaimed DJs, live electronic acts, and avant-garde performances,
              this night promises an unparalleled celebration of electronic
              culture.
            </span>
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-sm lg:text-xl lg:tracking-wide leading-tight font-semibold">
              <span className="text-white lg:text-white/80">
                Main Stage: Electronic Pulse
              </span>
            </span>
            <span className="text-sm lg:text-xl lg:tracking-wide leading-tight font-semibold">
              <span className="text-white lg:text-white/80">
                Interactive Art and Light Installations
              </span>
            </span>
            <span className="text-sm lg:text-xl lg:tracking-wide leading-tight font-semibold">
              <span className="text-white lg:text-white/80">
                Chill Zones & Ambient Lounges
              </span>
            </span>
            <span className="text-sm lg:text-xl lg:tracking-wide leading-tight font-semibold">
              <span className="text-white lg:text-white/80">
                After-Dawn Activities
              </span>
            </span>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col items-start justify-start gap-4"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0, scale: 1 },
            hidden: { opacity: 0.5, y: 300, scale: 0.5 },
          }}
        >
          <span className="text-xl lg:text-6xl lg:tracking-widest leading-tight font-black">
            <span className="text-white lg:text-white/80">
              <span className="text-moon/50">DAY 4: </span>RUSH HOUR:{" "}
              <span className="font-semibold">THE GRANDE FINALE</span>
            </span>
          </span>
          <span className="text-md lg:text-lg lg:tracking-wide leading-tight font-semibold">
            <span className="text-white lg:text-white/80">
              Embrace the exhilaration of the final day with Rush Hour: The
              Grande Finale, a day dedicated to showcasing international music
              acts, breathtaking performances, and a celebration of the
              festivals spirit. This day promises an unforgettable end to an
              extraordinary event.
            </span>
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-sm lg:text-xl lg:tracking-wide leading-tight font-semibold">
              <span className="text-white lg:text-white/80">
                Main Stage: Global Beats
              </span>
            </span>
            <span className="text-sm lg:text-xl lg:tracking-wide leading-tight font-semibold">
              <span className="text-white lg:text-white/80">
                International Experiences
              </span>
            </span>
            <span className="text-sm lg:text-xl lg:tracking-wide leading-tight font-semibold">
              <span className="text-white lg:text-white/80">
                The Grande Finale Show
              </span>
            </span>
            <span className="text-sm lg:text-xl lg:tracking-wide leading-tight font-semibold">
              <span className="text-white lg:text-white/80">After-Parties</span>
            </span>
          </div>
        </motion.div>
        <div className="mt-32">
          <span className="text-xl lg:text-6xl lg:tracking-widest leading-tight font-black">
            <span className="text-white lg:text-white/80">
              <span className="text-moon/50">
                FURTHER INFORMATION ON EVENT DAYS WILL BE ANNOUNCED ON ARRIVAL
              </span>
            </span>
          </span>
        </div>
        <div className="flex flex-col gap-8 justify-start items-start">
          <div>
            <span className="text-xs lg:text-md lg:tracking-widest leading-tight font-semibold">
              <span className="text-white lg:text-white/80">
                <span className="text-white/80">
                  BE SURE TO HAVE YOUR{" "}
                  <span className="text-moon/50">SSPULSE</span> CARD AT ALL
                  TIMES DURING THE EVENT.
                </span>
              </span>
            </span>
          </div>
          <div className="flex lg:flex-row flex-col items-start justify-start gap-4">
            <div id="basic" className="lg:w-96 lg:h-64 w-64 h-48"></div>
            <div id="vip" className="lg:w-96 lg:h-64 w-64 h-48"></div>
          </div>
        </div>
        <VideoPlayer />
      </div>
    </div>
  );
};

export default Home;
