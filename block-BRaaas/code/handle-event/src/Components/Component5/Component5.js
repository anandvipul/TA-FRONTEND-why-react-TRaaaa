import data from "./Data";
import React from "react";
function eventHandle(item) {
  alert(`Hello ${item}`);
}

class Component5 extends React.Component {
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
              eventHandle(item.id);
            }}
          >
            {item.value}
          </button>
        );
      })}
    </>
  );
}

export default Component5;
