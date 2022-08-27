import React from "react";
// Import native-doctor from "donice"

function Laps(props) {
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
  // 😛😛😛😛😛😛😛
  return (
    <div className="flex-column space-y-2">
      <hr />
      <div className="flex flex-row space-x-64">
        <p>Lap {props.laps.length + 1} </p>
        <span className="text- font-bold">
          {hours()}
          {props.timer.minutes >= 10
            ? props.timer.minutes
            : "0" + props.timer.minutes}
          :
          {props.timer.seconds >= 10
            ? props.timer.seconds
            : "0" + props.timer.seconds}
          :
          {props.timer.milliseconds >= 10
            ? props.timer.milliseconds
            : "0" + props.timer.milliseconds}
        </span>
      </div>

      <div>{props.laps}</div>
      
    </div>
  );
}
// 
export default Laps;

// const makeLaps = () => {
//   const lapsArray = [];
//   if (lapsArray.includes(props.laps)) {
//     return (
//       <div className="flex-column space-y-2">
//         <hr />
//         <div className="flex flex-row space-x-64">
//           <p>Lap {props.lapCounter}</p>
//           <span className="text-md font-bold">
//             {props.timer.minutes}:{props.timer.seconds}:
//             {props.timer.milliseconds}
//           </span>
//         </div>
//         <hr />
//       </div>
//     );
//   }
// };

// git commit -m "final commit"
// 

