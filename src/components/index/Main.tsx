import React, { useState, useEffect } from "react";
import Card from "../utilities/Card";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { PiWarningDiamondFill } from "react-icons/pi";

interface HeroProps {
  scrollAction: any;
}

const Hero: React.FC<HeroProps> = ({ scrollAction }) => {
  const [expiryTime, setExpiryTime] = useState("16 mar 2024 05:00:00");
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: 0,
    countdownHours: 0,
    countdownMinutes: 0,
    countdownSeconds: 0,
  });

  useEffect(() => {
    const countdownTimer = () => {
      const timeInterval = setInterval(() => {
        const countdownDateTime = new Date(expiryTime).getTime();
        const currentTime = new Date().getTime();
        const remainingDayTime = countdownDateTime - currentTime;
        if (remainingDayTime < 0) {
          clearInterval(timeInterval);
          setExpiryTime("");
          setCountdownTime({
            countdownDays: 0,
            countdownHours: 0,
            countdownMinutes: 0,
            countdownSeconds: 0,
          });
          return;
        }

        const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
        const totalHours = Math.floor(
          (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const totalMinutes = Math.floor(
          (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const totalSeconds = Math.floor(
          (remainingDayTime % (1000 * 60)) / 1000
        );

        setCountdownTime({
          countdownDays: totalDays,
          countdownHours: totalHours,
          countdownMinutes: totalMinutes,
          countdownSeconds: totalSeconds,
        });
      }, 1000);

      return () => clearInterval(timeInterval); // Clear interval on component unmount
    };

    const timer: any = countdownTimer();
    return () => clearInterval(timer); // Ensure this is returned to clear the interval when the component unmounts or the expiryTime changes
  }, [expiryTime]);

  return (
    <>
      <div>
        <div className="top-[7rem]">
          <h1 className="text-3xl lg:text-3xl leading-tight lg:leading-tight font-black">
            <motion.span
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.1, delay: 1.2 }}
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
              transition={{ duration: 0.1, delay: 1.4 }}
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
              transition={{ duration: 0.1, delay: 2 }}
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
            <span className="text-white text-5xl animate-[pulse_0.9s_ease-in-out_infinite] animate-ping">
              PULSE
            </span>
          </h1>
          <br />
          <button
            onClick={scrollAction}
            className="lg:bg-white/10 bg-white/20 hover:bg-white/20 lg:text-white/10 text-white/20 font-bold py-2 px-4 rounded-full inline-flex items-center"
          >
            <PiWarningDiamondFill size={24} className="lg:fill-white/20 fill-white/30" />
            <span className="pl-2">DO NOT CLICK</span>
          </button>
          <div className="lg:flex items-center justify-center lg:my-8 lg:pb-24">
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
                <span className="text-xs text-white font-extrabold">
                  {" "}
                  HOURS
                </span>
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
            animate="visible"
            transition={{ duration: 0.2, delay: 3 }}
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0, scale: 1 },
              hidden: { opacity: 0, y: 0, scale: 0.2 },
            }}
            className="flex items-center justify-center pt-12 lg:pt-0"
          >
            <span className="text-3xl lg:text-9xl lg:tracking-widest leading-tight font-black">
              <span className="text-white lg:text-white/80">
                <TypeAnimation
                  sequence={[
                    "COMING SOON",
                    1000,
                    "16 - 19 MARCH",
                    1000,
                    "96 HOURS",
                    1000,
                    "COMING SOON",
                    1000,
                  ]}
                  wrapper="span"
                  speed={60}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </span>
            </span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
