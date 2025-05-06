import React, { useState } from "react";
import Todo from "./todo";
import { RxHamburgerMenu } from "react-icons/rx";

export default function hamburger() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col justify-center items-end">
      <RxHamburgerMenu
        onClick={() => {
          setShow((prev) => !prev);
        }}
        className=" bg-amber-200 border-2 border-[#442312] m-4 mb-0 p-2 size-10 rounded-lg font-calsans"
      />
      {show && (
        <div>
          <Todo />
        </div>
      )}
    </div>
  );
}
