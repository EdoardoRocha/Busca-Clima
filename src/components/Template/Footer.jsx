import { Fragment } from "react/cjs/react.production.min";
import "./Footer.css";

function Footer(props) {
  return (
    <Fragment>
      <footer className="footer">
        Desenvolvido com
        <span className="text-danger">
          <i className="fa fa-heart v-middle"></i>
        </span>
          por
        <strong>
          <a
            id="linkInsta"
            href="https://instagram.com/pensandoem.js"
            target="_blank"
            rel="noreferrer"
          >
            @pensandoem.js
          </a>
        </strong>
      </footer>
    </Fragment>
  );
}

export default Footer;
