import Article from "./Article";
import data from "./data";

function Articles(props) {
  return (
    <>
      <div className="article-container">
        {data.map((item) => (
          <Article {...item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default Articles;
