import { useState, useEffect, useRef } from "react";

export default function CountdownTimer({
  time,
  pause,
  checkTime,
  setProgress,
}) {
  const initialTime = time;

  const [timeLeft, setTimeLeft] = useState(initialTime);

  const intervalRef = useRef(null);

  useEffect(() => {
    setTimeLeft(time); // Reset timeLeft when time prop changes
  }, [time]);

  useEffect(() => {
    if (pause || timeLeft <= 0) return;
    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current);
          // perform action when time stop

          console.log("i should be running");

          // prevents timer component from getting a re render immediately after component is called
          setTimeout(() => setProgress(0), 0);
          setTimeout(() => {
            console.log("timeout");
            checkTime(); // Trigger the checkTime function from the parent
          }, 1700);
          return 0;
        } else {
          const currenTime = prevTime - 1;
          console.log(`counting down ${currenTime}`);

          // prevents timer component from getting a re render immediately after component is called
          setTimeout(() => setProgress((currenTime / time) * 100), 0);
          console.log(time);
          console.log(prevTime - 1);
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
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds === 0 ? "00" : seconds < 10 ? "0" + seconds : seconds}
      </h2>
    </>
  );
}
