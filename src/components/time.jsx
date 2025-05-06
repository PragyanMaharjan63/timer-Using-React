import React, { useState, useEffect } from "react";

export default function time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let intervaL = setInterval(() => {
      setTime(new Date());
    }, 60000);
    return () => clearInterval(intervaL);
  }, []);

  return (
    <p>
      {time.getHours()}:{time.getMinutes()}
    </p>
  );
}
