function CardPalete(props) {
  return (
    <>
      <div class="color-palete-card">
        <div className="color-palete"></div>
        <div className="color-text">
          <span className="number">{props.number}</span>
          <span className="color-code">{props.colorCode}</span>
        </div>
      </div>
    </>
  );
}

export default CardPalete;
