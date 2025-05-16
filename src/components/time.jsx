import { useState, useEffect } from "react";

export default function time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let intervaL = setInterval(() => {
      setTime(new Date()); //updates the value so it causes the interval to rerender
    }, 1000);
    return () => clearInterval(intervaL); //if there is not clear interval then everytime the component mounts then it will create new interval causing multiple intervals.
  }, []);

  return (
    <p>
      {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
    </p>
  );
}
