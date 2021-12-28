import Main from "../Template/Main";
import "./Home.css";

import api from "../../Services/api";
import { useState } from "react";

const data = {
  apiKey: "b8f0f509513a53d107b95e0401bac9fe",
  lang: "pt_br",
  units: "metric",
  city: "Fortaleza",
};

function Home(props) {
  const [icon, setIcon] = useState("04n");

  try {
    api
      .get(
        `weather?q=${data.city}&units=${data.units}&lang=${data.lang}&appid=${data.apiKey}`
      )
      .then((response) => {
        ClimateMap(response);
        setIcon(response.data.weather[0].icon);
      });
  } catch (e) {
    alert("Error ao buscar as informações. Porfavor aguarde.");
  }

  function ClimateMap(clima) {
    const city = document.querySelector(".city");
    const date = document.querySelector(".date");
    const desc = document.querySelector(".description");
    const tempNow = document.querySelector(".tempNow");
    const tempMax = document.querySelector(".tempMax");
    const tempMin = document.querySelector(".tempMin");

    const DateNow = new Date();
    const day = DateNow.getDate();
    const month = DateNow.getMonth() + 1;
    const year = DateNow.getFullYear();

    let monthName;

    switch (month) {
      case 1:
        monthName = "Janeiro";
        break;
      case 2:
        monthName = "Fevereiro";
        break;
      case 3:
        monthName = "Março";
        break;
      case 4:
        monthName = "Abril";
        break;
      case 5:
        monthName = "maio";
        break;
      case 6:
        monthName = "Junho";
        break;
      case 7:
        monthName = "Julho";
        break;
      case 8:
        monthName = "Agosto";
        break;
      case 9:
        monthName = "Setembro";
        break;
      case 10:
        monthName = "Outubro";
        break;
      case 11:
        monthName = "Novembro";
        break;
      case 12:
        monthName = "Dezembro";
        break;
      default:
        monthName = "Não foi possivel indentificar o seu mês atual.";
    }

    city.textContent = `${clima.data.name},${clima.data.sys.country}`;
    desc.textContent = `Desc: ${clima.data.weather[0].description}`;
    tempNow.textContent = Math.floor(clima.data.main.temp) + " °C ";
    date.textContent = `${day} de ${monthName} de ${year}`;
    tempMax.textContent = Math.floor(clima.data.main.temp_max) + " °C";
    tempMin.textContent = Math.floor(clima.data.main.temp_min) + " °C";
  }

  return (
    <Main
      title="Projeto busca clima"
      subtitle="Aplicação para analise climatica"
      icon="fa fa-home"
    >
      <h2 id="contentTitle" className="display-5">
        Como está a sua cidade?
      </h2>
      <p>
        Aplicação web feita com intuito de facilitar a leitura do clima da
        cidade descrita.
      </p>

      <hr />

      <p>Como Exemplo, veja a cidade de Fortaleza neste momento.</p>

      <div className="tempCamp col-6 col-sm-12 ">
        <div className="city"></div>
        <div className="icons">
          <div className="iconClimate">
            <img src={require(`../../Assets/icons/${icon}.png`)} alt="Teste" />
          </div>
          <div className="tempNow"></div>
          <div className="MaxEMin">
            <span className="tempVariable">
              Max
              <span className="tempMax"> </span> /
              <span className="tempMin"> </span>
              Min
            </span>
          </div>
        </div>
        <div className="descripts">
          <span className="description"></span>
        </div>
        <div className="date"></div>
      </div>
    </Main>
  );
}

export default Home;
