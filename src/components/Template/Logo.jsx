import { Link } from "react-router-dom";
import logo from "../../Assets/img/logo-projeto.png";
import "./Logo.css";

function Logo(props) {
  return (
    <aside className="logo">
      <Link to="/">
        <img src={logo} alt="Logo cc" />
      </Link>
    </aside>
  );
}

export default Logo;
