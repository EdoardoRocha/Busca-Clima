import MenuItens from "./MenuItens";

import "./Nav.css";

function Nav(props) {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <MenuItens href="/" icon="fa fa-home" label="Home" />
        <MenuItens href="Clima" icon="fa fa-cloud" label="Clima" />
      </nav>
    </aside>
  );
}

export default Nav;
