import { useState, useEffect } from "react";

export default function time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let intervaL = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervaL);
  }, []);

  return (
    <p>
      {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
    </p>
  );
}
