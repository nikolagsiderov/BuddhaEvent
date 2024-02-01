import React, { useState, useEffect } from "react";
import Card from "../utilities/Card";

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

  const render: boolean =
    countdownTime.countdownDays > 0 &&
    countdownTime.countdownHours > 0 &&
    countdownTime.countdownMinutes > 0 &&
    countdownTime.countdownSeconds > 0;

  useEffect(() => {
    countdownTimer();
  });

  return (
    <div>
      {render && (
        <div className="mb-6 sticky top-[7rem] lg:mt-0">
          <h1 className="text-3xl lg:text-3xl leading-tight lg:leading-tight font-black">
            SOFIA SOUND <span className="text-moon/50">OF</span>
            <br />
            PULSE
          </h1>
          <div className="lg:flex gap-6 lg:gap-16 items-center justify-center my-8 lg:pb-24">
            <Card>
              <span className="text-3xl text-white/90 font-extrabold">
                {countdownTime.countdownDays}
              </span>
              <span className="text-xs text-white font-extrabold"> DAYS</span>
            </Card>
            <Card>
              <span className="text-3xl text-white/90 font-extrabold">
                {countdownTime.countdownHours}
              </span>
              <span className="text-xs text-white font-extrabold"> HOURS</span>
            </Card>
            <Card>
              <span className="text-3xl text-white/90 font-extrabold">
                {countdownTime.countdownMinutes}
              </span>
              <span className="text-xs text-white font-extrabold">
                {" "}
                MINUTES
              </span>
            </Card>
            <Card>
              <span className="text-3xl text-white/90 font-extrabold">
                {countdownTime.countdownSeconds}
              </span>
              <span className="text-xs text-white font-extrabold">
                {" "}
                SECONDS
              </span>
            </Card>
          </div>
          <div className="lg:flex items-center justify-center">
            <h1 className="text-7xl lg:text-9xl lg:leading-tight font-black">
              <span className="bg-gradient-to-r from-white/40 to-moon/70 text-transparent bg-clip-text">
                COMING SOON
              </span>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
