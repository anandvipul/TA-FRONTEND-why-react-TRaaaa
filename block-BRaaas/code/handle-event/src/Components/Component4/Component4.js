import data from "./Data";
import React from "react";
function eventHandle(item) {
  alert(`Hello ${item}`);
}

class Component4 extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return momponent3();
  }
}

function momponent3() {
  return (
    <>
      {data.map((item) => {
        return (
          <button
            onClick={() => {
              eventHandle(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </>
  );
}

export default Component4;
