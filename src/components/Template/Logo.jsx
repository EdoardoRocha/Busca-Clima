import { Link } from "react-router-dom";
import logo from "../../Assets/img/logo_projeto_210.png";
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
