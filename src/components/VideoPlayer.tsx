"use client";

import { useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoPlayer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  //video path
  const videosrc = "/teaser.mp4";

  return (
    <div ref={ref} id="test">
      <ReactPlayer
        playing={isInView}
        width="100%"
        height="58%"
        url={videosrc}
        controls={true}
        light={false}
        loop={true}
      />
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;
