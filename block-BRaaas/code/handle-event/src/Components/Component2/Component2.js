function helpButton() {
  alert("To learn React use https://reactjs.org");
  alert("React and ReactDOM works together");
  alert("Babel helps in writing JSX");
}

function Component2() {
  return (
    <>
      <button
        onClick={() => {
          helpButton();
        }}
      >
        How Can I help You !!
      </button>
    </>
  );
}

export default Component2;
