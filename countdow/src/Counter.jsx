// import React from "react";
// import { useState, useEffect } from "react";

// function Counter() {
//   const [days, setDays] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);

//   const targetDate = new Date("2023-01-01 00:00:00");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const currentDate = new Date();
//       const timeUntilDate = targetDate - currentDate;
//       setDays(Math.floor(timeUntilDate / (1000 * 60 * 60 * 24)));
//       setHours(
//         Math.floor((timeUntilDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//       );
//       setMinutes(Math.floor((timeUntilDate % (1000 * 60 * 60)) / (1000 * 60)));
//       setSeconds(Math.floor((timeUntilDate % (1000 * 60)) / 1000));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="countdown">
//       <div className="box days">
//         <p>{days}</p>
//       </div>
//       <div className="box hours">
//         <p>{hours}</p>
//       </div>
//       <div className="box minutes">
//         <p>{minutes}</p>
//       </div>
//       <div className="box seconds">
//         <p>{seconds}</p>
//       </div>
//     </div>
//   );
// }

// export default Counter;

import React, { useState, useEffect } from "react";

function Counter() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const [prevDays, setPrevDays] = useState(-1);
  const [prevHours, setPrevHours] = useState(-1);
  const [prevMinutes, setPrevMinutes] = useState(-1);
  const [prevSeconds, setPrevSeconds] = useState(-1);

  const targetDate = new Date("2023-03-09 00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("rotate");
      console.log("rotate class added");
      const currentDate = new Date();
      const timeUntilDate = targetDate - currentDate;
      setDays(Math.floor(timeUntilDate / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((timeUntilDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((timeUntilDate % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timeUntilDate % (1000 * 60)) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass("");
      console.log("class removed");
    }, 400);
    return () => clearTimeout(timer);
  }, [animationClass]);

  return (
    <div className="countdown">
      <div
        className={`box days ${prevDays !== days ? "rotate" : ""}`}
        onAnimationEnd={() => setPrevDays(days)}
      >
        <p>{days}</p>
      </div>
      <div
        className={`box hours ${prevHours !== hours ? "rotate" : ""}`}
        onAnimationEnd={() => setPrevHours(hours)}
      >
        <p>{hours}</p>
      </div>
      <div
        className={`box minutes ${prevMinutes !== minutes ? "rotate" : ""}`}
        onAnimationEnd={() => setPrevMinutes(minutes)}
      >
        <p>{minutes}</p>
      </div>
      <div
        className={`box seconds ${prevSeconds !== seconds ? "rotate" : ""}`}
        onAnimationEnd={() => setPrevSeconds(seconds)}
      >
        <p>{seconds}</p>
      </div>
    </div>
  );
}

export default Counter;
