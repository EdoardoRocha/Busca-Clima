import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import Nav from "../components/Template/Nav";
import Routes from "./Routes";
import Footer from "../components/Template/Footer";
import Logo from "../components/Template/Logo";

import { HashRouter } from "react-router-dom";

import "./App.css";

function App(props) {
  return (
    <HashRouter>
      <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
