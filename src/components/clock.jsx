import React, { useEffect, useRef, useState } from "react";
import { playAlert } from "../components/alert";

export default function Clock({ inputTime, stop }) {
  const [timeLeft, setTimeLeft] = useState(inputTime);
  const [timerStarted, setTimerStarted] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setTimeLeft(inputTime);
  }, [inputTime]);

  function startTimer() {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((t) => (t > 0 ? t - 1 : 0));
      }, 1000);
      setTimerStarted(true);
    }
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimerStarted(false);
  }

  useEffect(() => {
    if (!stop && timeLeft > 0) {
      startTimer();
    } else {
      stopTimer();
    }

    return () => stopTimer();
  }, [stop, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 && timerStarted) {
      playAlert();
    }
  }, [timeLeft, timerStarted]);

  return (
    <div
      className={`transition-all duration-700 ${
        !timerStarted
          ? "text-2xl bg-amber-200 w-52 h-52 flex justify-center items-center rounded-full border-4 border-[#442312] font-calsans text-[#442312]"
          : "text-4xl bg-amber-200 w-72 h-72 flex justify-center items-center rounded-full border-4 border-[#442312] font-calsans text-[#442312]"
      }`}
    >
      {/* <button>clickkkkkkk</button> */}
      {timeLeft === 0 ? (
        "Time's up!"
      ) : (
        <p>
          {parseInt(timeLeft / 3600) === 0
            ? parseInt((timeLeft / 60) % 60) === 0
              ? `${timeLeft % 60} s`
              : `${parseInt(timeLeft / 60) % 60} Min ${timeLeft % 60} s`
            : `${parseInt(timeLeft / 3600)}Hr ${
                parseInt(timeLeft / 60) % 60
              } Min ${" "}
          ${timeLeft % 60} s`}
        </p>
      )}
    </div>
  );
}
