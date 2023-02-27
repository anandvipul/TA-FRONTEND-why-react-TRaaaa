import "./style.css";

function Article(props) {
  return (
    <>
      <div className="article">
        <img src={props.urlToImage} alt="article-hero" />
        <h4>{props.title}</h4>
      </div>
    </>
  );
}

export default Article;
