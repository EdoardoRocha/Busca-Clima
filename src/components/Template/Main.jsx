import Header from "./Header";
import React from "react";
import "./Main.css";

function Main(props) {
  return (
    <React.Fragment>
      <Header title={props.title} icon={props.icon} subtitle={props.subtitle} />
      <main className="content container-fluid">
        <div className="p-3 mt-3">{props.children}</div>
      </main>
    </React.Fragment>
  );
}

export default Main;
