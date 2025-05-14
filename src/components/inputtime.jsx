import React, { useEffect, useRef, useState } from "react";
import Clock from "./clock";
import { IoAddOutline } from "react-icons/io5";
import { GrFormSubtract } from "react-icons/gr";

export default function Timer() {
  const [Hour, setHour] = useState(0);
  const [Minutes, setMinutes] = useState(0);
  const [timer, setTimer] = useState(0);
  const [stop, setStop] = useState(false);
  const [isReset, setReset] = useState(false);
  const [start, setStart] = useState(false);

  const getTime = (event) => {
    event.preventDefault();
    let Totaltimer = Hour * 60 * 60 + Minutes * 60;
    setTimer(Totaltimer);
    setStart(true);
  };
  const incHour = () => {
    setHour((prev) => prev + 1);
  };
  const decHour = () => {
    setHour((prev) => prev - 1);
  };
  const incMin = () => {
    setMinutes((prev) => prev + 1);
  };
  const decMin = () => {
    setMinutes((prev) => prev - 1);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-3">
        <Clock inputTime={timer} stop={stop} />
        <form onSubmit={getTime} className="flex flex-col space-y-3">
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col items-center">
              <button
                className="bg-amber-200 h-max w-max m-2 border-1 border-[#442312] rounded-sm"
                onClick={incHour}
              >
                <IoAddOutline className="size-6" />
              </button>
              <input
                type="text"
                id="hour"
                min={0}
                max={24}
                value={Hour}
                onChange={(e) => {
                  setHour(Number(e.target.value));
                }}
                className="bg-amber-200 rounded-xl outline-none p-2 w-10 border-1 border-[#442312] font-bold text-xl"
              />
              <button
                className="bg-amber-200 h-max w-max m-2 border-1 border-[#442312] rounded-sm"
                onClick={decHour}
              >
                <GrFormSubtract className="size-6" />
              </button>
            </div>
            <p className="text-[#100605] m-2 font-bold text-3xl">Hr : </p>

            <div className="flex flex-col items-center">
              <button
                className="bg-amber-200 h-max w-max m-2 border-1 border-[#442312] rounded-sm"
                onClick={incMin}
              >
                <IoAddOutline className="size-6" />
              </button>
              <input
                type="text"
                id="second"
                min={0}
                max={60}
                value={Minutes}
                onChange={(e) => {
                  setMinutes(Number(e.target.value));
                }}
                className="bg-amber-200 rounded-xl outline-none p-2 w-10 border-1 border-[#442312] font-bold text-xl"
              />
              <button
                className="bg-amber-200 h-max w-max m-2 border-1 border-[#442312] rounded-sm"
                onClick={decMin}
              >
                <GrFormSubtract className="size-6" />
              </button>
            </div>
            <p className="text-[#100605] m-2 font-bold text-3xl">Min</p>
          </div>
          <button
            type="submit"
            className="bg-amber-200 border-2 border-[#442312] p-3 outline-none rounded-lg text-xl text-[#442312] font-calsans"
            onClick={
              isReset || start
                ? () => {
                    setReset(false);
                    setTimer(0);
                    setMinutes(0);
                    setHour(0);
                  }
                : () => {
                    getTime;
                    setReset(true);
                  }
            }
          >
            {isReset || start ? "Reset Timer" : "Start Timer"}
          </button>
          <button
            className="bg-amber-200 border-2 border-[#442312] p-3 outline-none rounded-lg text-xl text-[#442312] font-calsans"
            onClick={() => {
              stop ? setStop(false) : setStop(true);
            }}
          >
            {stop ? "Resume Timer" : "Pause Timer"}
          </button>
        </form>
      </div>
    </>
  );
}
