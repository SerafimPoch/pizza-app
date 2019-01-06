import React, { useEffect, useState } from "react";
import { Clock } from "./style";

const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return <Clock>{date.toLocaleTimeString()}</Clock>;
};

export default Time;
