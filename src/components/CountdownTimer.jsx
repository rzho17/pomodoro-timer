import { useState, useEffect, useRef } from "react";

export default function CountdownTimer({ time, pause, checkTime }) {
  const intialTime = time;

  const [timeLeft, setTimeLeft] = useState(intialTime);

  const intervalRef = useRef(null);

  useEffect(() => {
    setTimeLeft(time); // Reset timeLeft when time prop changes
  }, [time]);

  useEffect(() => {
    if (pause || timeLeft <= 0) return;
    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime < 1) {
          clearInterval(intervalRef.current);
          // perform action when time stop
          setTimeout(() => {
            console.log("timeout");
            checkTime(); // Trigger the checkTime function from the parent
          }, 0);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [timeLeft, pause, checkTime]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = Math.floor(timeLeft % 60);
  return (
    <>
      <h2>
        {hours > 0 ? hours + ":" : null}
        {minutes}:
        {seconds === 0 ? "00" : seconds < 10 ? "0" + seconds : seconds}
      </h2>
    </>
  );
}
