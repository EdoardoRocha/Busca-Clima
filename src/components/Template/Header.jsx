import "./Header.css";

function Header(props) {
  return (
    <header className="header d-none d-sm-flex flex-column ">
      <h1 className="mt-3 ">
        <i className={`${props.icon}`}></i>
        {props.title}
      </h1>
      <p className="text-muted lead">{props.subtitle}</p>
    </header>
  );
}

export default Header;
