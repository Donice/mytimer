import React from "react";

function Display(props) {
  const hours = () => {
    if (props.timer.hours === 0) {
      return "";
    } else {
      return (
        <span>
          {props.timer.hours >= 10
            ? props.timer.hours
            : "0" + props.timer.hours}
          :
        </span>
      );
    }
  };
  return (
    <div className="text-7xl font-bold">
      <span>{hours()}</span>
      <span>
        {props.timer.minutes >= 10
          ? props.timer.minutes
          : "0" + props.timer.minutes}
      </span>
      :
      <span>
        {props.timer.seconds >= 10
          ? props.timer.seconds
          : "0" + props.timer.seconds}
      </span>
      :
      <span>
        {props.timer.milliseconds >= 10
          ? props.timer.milliseconds
          : "0" + props.timer.milliseconds}
      </span>
    </div>
  );
}

export default Display;
