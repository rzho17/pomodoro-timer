import { useState, useEffect } from "react";

export default function CountdownTimer({ time }) {
  const intialTime = time;

  const [timeLeft, setTimeLeft] = useState(intialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);

          // perform action when time stop

          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = Math.floor(timeLeft % 60);
  return (
    <>
      <h2>
        {hours}:{minutes}:{seconds}
      </h2>
    </>
  );
}
