function helloFunction() {
  alert("Hello React Event");
}

function Component1() {
  return (
    <>
      <button onClick={() => helloFunction()}>ClickMe</button>
    </>
  );
}

export default Component1;
