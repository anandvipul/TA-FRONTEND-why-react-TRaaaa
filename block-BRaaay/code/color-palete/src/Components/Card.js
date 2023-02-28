function CardPalete(props) {
  return (
    <>
      <div className="color-palete-card">
        <div
          className="color-palete"
          style={{ backgroundColor: props.colorCode }}
        ></div>
        <div className="color-text">
          <span className="number">{props.number}</span>
          <span className="color-code">{props.colorCode}</span>
        </div>
      </div>
    </>
  );
}

export default CardPalete;
