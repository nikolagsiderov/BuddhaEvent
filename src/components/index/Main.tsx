import React, { useState, useEffect } from "react";
import Card from "../utilities/Card";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const [expiryTime, setExpiryTime] = useState("16 mar 2024 05:00:00");
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: 0,
    countdownHours: 0,
    countdownMinutes: 0,
    countdownSeconds: 0,
  });

  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime("");
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  });

  return (
    <div>
      <div className="mb-6 sticky top-[7rem] lg:mt-0">
        <h1 className="text-3xl lg:text-3xl leading-tight lg:leading-tight font-black">
          <motion.span
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.1, delay: 0.2 }}
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0, scale: 1 },
              hidden: { opacity: 0, y: 0, scale: 0.9 },
            }}
          >
            SOFIA{" "}
          </motion.span>
          <motion.span
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.1, delay: 0.4 }}
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0, scale: 1 },
              hidden: { opacity: 0, y: 0, scale: 0.9 },
            }}
          >
            SOUND{" "}
          </motion.span>
          <motion.span
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.1, delay: 1 }}
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0, scale: 1 },
              hidden: { opacity: 0, y: 0, scale: 0.9 },
            }}
            className="text-moon/50"
          >
            OF
          </motion.span>
          <br />
          <motion.span
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.1, delay: 0.6 }}
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0, scale: 1 },
              hidden: { opacity: 0, y: 0, scale: 0.9 },
            }}
          >
            PULSE
          </motion.span>
        </h1>
        <div className="lg:flex gap-6 lg:gap-16 items-center justify-center my-8 lg:pb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.1, delay: 2 }}
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0, scale: 1 },
              hidden: { opacity: 0, y: 0, scale: 0.8 },
            }}
          >
            <Card>
              <span className="text-3xl text-white/90 font-extrabold">
                {countdownTime.countdownDays}
              </span>
              <span className="text-xs text-white font-extrabold"> DAYS</span>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.1, delay: 2.1 }}
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0, scale: 1 },
              hidden: { opacity: 0, y: 0, scale: 0.8 },
            }}
          >
            <Card>
              <span className="text-3xl text-white/90 font-extrabold">
                {countdownTime.countdownHours}
              </span>
              <span className="text-xs text-white font-extrabold"> HOURS</span>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.1, delay: 2.2 }}
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0, scale: 1 },
              hidden: { opacity: 0, y: 0, scale: 0.8 },
            }}
          >
            <Card>
              <span className="text-3xl text-white/90 font-extrabold">
                {countdownTime.countdownMinutes}
              </span>
              <span className="text-xs text-white font-extrabold">
                {" "}
                MINUTES
              </span>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.1, delay: 2.3 }}
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0, scale: 1 },
              hidden: { opacity: 0, y: 0, scale: 0.8 },
            }}
          >
            <Card>
              <span className="text-3xl text-white/90 font-extrabold">
                {countdownTime.countdownSeconds}
              </span>
              <span className="text-xs text-white font-extrabold">
                {" "}
                SECONDS
              </span>
            </Card>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.2, delay: 3 }}
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0, scale: 1 },
            hidden: { opacity: 0, y: 0, scale: 0.5 },
          }}
          className="lg:flex items-center justify-center"
        >
          <h1 className="text-3xl lg:text-9xl lg:leading-tight font-black">
            <span className="bg-gradient-to-r from-white/40 to-moon/90 text-transparent bg-clip-text">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "COMING SOON",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "16 - 19 MARCH",
                  1000,
                  "96 HOURS",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
