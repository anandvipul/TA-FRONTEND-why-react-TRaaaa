import data from "./Data";

function eventHandle(item) {
  alert(`Hello ${item}`);
}

function Component3() {
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

export default Component3;
