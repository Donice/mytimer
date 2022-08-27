import React from "react";

function Buttons(props) {
  return (
    <div className="p-10">
      <div>
        {props.status === 0 ? (
          <button
            className="bg-zinc-900 rounded-lg px-10 py-2.5 mb-5 mx-1 border border-transparent font-medium text-base cursor-pointer hover:border-violet-600"
            onClick={props.start}
          >
            Start
          </button>
        ) : (
          ""
        )}

        {(props.status >= 1 && props.status <= 2)? (
          <div>
            <button
              className="bg-red-600 rounded-lg px-10 py-2.5 mb-5 mx-1 border border-transparent font-medium text-base cursor-pointer hover:border-red-900"
              onClick={props.stop}
            >
              Stop
            </button>

            <button
              className="bg-yellow-900 rounded-lg px-10 py-2.5 mb-5 mx-1 border border-transparent font-medium text-base cursor-pointer hover:border-violet-600"
              onClick={props.startLap}
            >
              lap
            </button>
          </div>
        ) : (
          ""
        )}

        {props.status === 3 ? (
          <div>
            <button
              className="bg-green-600 rounded-lg px-10 py-2.5 mb-5 mx-1 border border-transparent font-medium text-base cursor-pointer hover:border-red-900"
              onClick={props.resume}
            >
              Resume
            </button>

            <button
              className="bg-yellow-900 rounded-lg px-10 py-2.5 mb-5 mx-1 border border-transparent font-medium text-base cursor-pointer hover:border-violet-600"
              onClick={props.restart}
            >
              Restart
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Buttons;
