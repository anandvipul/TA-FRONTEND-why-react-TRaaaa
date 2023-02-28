import Data from "./colors";
import CardPalete from "./Card";

function Stream(props) {
  let count = 50;
  return (
    <>
      <div className="container-13">
        <div className="text-card">
          <span className="bold-text">Grey</span>
          <span className="light-text">colors.coolGrey</span>
        </div>
      </div>
      <div className="container-75">
        {props.item.map((color) => {
          return <CardPalete number={count} colorCode={color} />;
        })}
      </div>
    </>
  );
}

function ColorContainer(props) {
  let item = [];

  function getData() {
    for (let color in props.data) {
      item.push();
    }
  }
  return (
    <>
      <div className="color-container">{props.data}</div>
    </>
  );
}

export default Stream;
