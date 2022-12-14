import React, { useState, useEffect } from "react";
// import Display from "./components/Display";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import Laps from "./components/Laps";
// import { useEffect } from "react";

function App() {
  const [timer, setTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const [intervals, setIntervals] = useState();
  const [status, setStatus] = useState(0);
  const [laps, setLaps] = useState([]);
  const [lapCounter, setLapCounter] = useState(0);

  const start = () => {
    beginTimer();
    setIntervals(setInterval(beginTimer, 10));
    setStatus(1);
  };

  let updatedHours = timer.hours;
  let updatedMinutes = timer.minutes;
  let updatedSeconds = timer.seconds;
  let updatedMilliseconds = timer.milliseconds;

  const beginTimer = () => {
    if (updatedMinutes === 60) {
      updatedHours++;
      updatedMinutes = 0;
    }
    if (updatedSeconds === 60) {
      updatedMinutes++;
      updatedSeconds = 0;
    }
    if (updatedMilliseconds === 99) {
      updatedSeconds++;
      updatedMilliseconds = 0;
    }
    updatedMilliseconds++;
    return setTimer({
      hours: updatedHours,
      minutes: updatedMinutes,
      seconds: updatedSeconds,
      milliseconds: updatedMilliseconds,
    });
  };

  const stop = () => {
    clearInterval(intervals);
    setStatus(3);
  };

  const restart = () => {
    clearInterval(intervals);
    setStatus(0);
    setLaps([]);
    setTimer({
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
  };

  const resume = () => start();

  const startLap = () => {
    setStatus(2);
    setLaps([
      <div className="flex-column space-y-2">
        <hr />
        <div className="flex flex-row space-x-64">
          <p>Lap {laps.length + 1}</p>
          <span className="text- font-bold">
            {/* {updatedHours >= 10 ? updatedHours : "0" + updatedHours}: */}
            {updatedMinutes >= 10 ? updatedMinutes : "0" + updatedMinutes}:
            {updatedSeconds >= 10 ? updatedSeconds : "0" + updatedSeconds}:
            {updatedMilliseconds >= 10
              ? updatedMilliseconds
              : "0" + updatedHours}
          </span>
        </div>
      </div>,
      ...laps,
    ]);
  };

  return (
    <div className="App">
      <h1 className="text-3xl text-violet-600 font-bold">Timer App</h1>

      <div className="my-4">
        <Display timer={timer} />

        <Buttons
          status={status}
          start={start}
          stop={stop}
          restart={restart}
          resume={resume}
          startLap={startLap}
        />

        <Laps
          timer={timer}
          // setTimer = {setTimer}
          laps={laps}
          lapCounter={lapCounter}
        />
      </div>
    </div>
  );
}

export default App;
