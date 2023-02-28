import Data from "./colors";
import CardPalete from "./Card";

function SingleStream(props) {
  let count = 0;
  let number = 0;
  return (
    <>
      <div className="singleColorArray">
        <div className="container-13">
          <div className="text-card">
            <span className="bold-text">Grey</span>
            <span className="light-text">colors.coolGrey</span>
          </div>
        </div>
        <div className="container-75">
          {props.color.map((item) => {
            if (count === 0) {
              number = 50;
            }
            if (count === 1) {
              number = 100;
            }
            if (count > 1) {
              number += 100;
            }
            let comp = (
              <CardPalete key={item} number={number} colorCode={item} />
            );
            count += 1;
            return <>{comp}</>;
          })}
        </div>
      </div>
    </>
  );
}

export default SingleStream;
