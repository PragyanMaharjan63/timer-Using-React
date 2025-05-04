import React, { useEffect, useState } from "react";

export default function Clock({ inputTime }) {
  const [timeLeft, setTimeLeft] = useState(inputTime);
  //   console.log(inputTime);
  let stop = false;
  useEffect(() => {
    setTimeLeft(inputTime);
  }, [inputTime]);

  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t > 0 && !stop) return t - 1;
        else return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <>
      <div className="text-2xl bg-amber-200 w-52 h-52 flex justify-center items-center rounded-full border-4 border-[#442312]">
        {timeLeft === 0
          ? "Time's up!"
          : `${parseInt(timeLeft / 3600)}Hr ${
              parseInt(timeLeft / 60) % 60
            } Min ${timeLeft % 60}`}
      </div>
    </>
  );
}
