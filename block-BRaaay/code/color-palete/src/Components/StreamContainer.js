import Data from "../Components/colors";
import SingleStream from "./SingleStream";

function StreamContainer() {
  return (
    <>
      {Object.keys(Data).map((item) => {
        return <SingleStream key={item} color={Data[`${item}`]} />;
      })}
    </>
  );
}

export default StreamContainer;
