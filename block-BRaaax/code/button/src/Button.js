import { ButtonSizes, ButtonTypes } from "./Data/buttonInfo";

function Button(props) {
  function getStyles() {
    let { type = ButtonTypes.PRIMARY, size = ButtonSizes.MEDIUM } = props;
    return `button button--${type} button--${size}`;
  }
  return (
    <>
      <button
        className={getStyles()}
        disabled={props.disabled}
        onClick={props.onClickHandler}
      >
        {props.label}
      </button>
    </>
  );
}

export default Button;
