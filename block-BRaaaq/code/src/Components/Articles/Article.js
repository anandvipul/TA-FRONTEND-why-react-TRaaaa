import "./style.css";
import PropTypes from "prop-types";

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

Article.propTypes = {
  urlToImage: PropTypes.string,
};

export default Article;
