import "./style.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">Logo</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </>
  );
}

export default Header;
