import { useState, useEffect } from "react";

export default function time() {
  const [time, setTime] = useState(new Date());
  const [dot, setDot] = useState(":");
  useEffect(() => {
    let intervaL = setInterval(() => {
      setTime(new Date()); //updates the value so it causes the interval to rerender
      setDot((prevDot) => (prevDot === ":" ? " " : ":"));
    }, 1000);
    return () => clearInterval(intervaL); //if there is not clear interval then everytime the component mounts then it will create new interval causing multiple intervals.
  }, []);

  return (
    <p>
      {time.getHours()}
      {dot}
      {time.getMinutes()}
      {dot}
      {time.getSeconds()}
    </p>
  );
}
