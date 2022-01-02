import React, { Component } from "react";
import Main from "../components/Template/Main";
import api from "../Services/api";

const headerProps = {
  title: "Previsão do tempo",
  subtitle: "Descubra como está e/ou estará o clima em sua cidade.",
  icon: "fa fa-cloud",
};

const initialState = {
  city: { NameCity: "" },
  dataWeather: "",
};

const data = {
  apiKey: "b8f0f509513a53d107b95e0401bac9fe",
  lang: "pt_br",
  units: "metric",
};

class getClima extends Component {
  state = { ...initialState };

  constructor(props) {
    super(props);
    this.renderInput = this.renderInput.bind(this);
    this.updateField = this.updateField.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
    this.renderWeatherData = this.renderWeatherData.bind(this);
    this.renderAll = this.renderAll.bind(this);
  }

  updateField(event) {
    const city = { ...this.state.city };
    city[event.target.name] = event.target.value;
    this.setState({ city });
  }

  async getWeatherData() {
    if (this.state.city.NameCity === "") {
      alert("Porfavor preencha os campos abaixo.");
      return;
    }

    try {
      await api
        .get(
          `weather?q=${this.state.city.NameCity}&units=${data.units}&lang=${data.lang}&appid=${data.apiKey}`
        )
        .then((response) => {
          this.setState({ dataWeather: response });
          return;
        });
    } catch (e) {
      alert(e);
    }
  }

  renderWeatherData() {
    const response = this.state.dataWeather;

    if (response === "") {
      return;
    } else {
      const tempNow = Math.round(response.data.main.temp);
      const tempMin = Math.round(response.data.main.temp_min);
      const tempMax = Math.round(response.data.main.temp_max);
      const description = response.data.weather[0].description;
      const icon = response.data.weather[0].icon;
      const NameCity = response.data.name;
      const country = response.data.sys.country;

      return (
        <div className="tempCamp col-6 col-sm-12">
          <div className="city">
            {NameCity},{country}
          </div>
          <div className="icons">
            <div className="iconClimate">
              <img
                src={require(`../Assets/icons/${icon}.png`)}
                alt={`icone do clima de ${NameCity}`}
              />
            </div>
            <div className="tempNow">{tempNow} °C</div>
            <div className="MaxEMin">
              <span className="tempVariable">
                Max
                <span>{tempMax} °C</span> /<span>{tempMin} °C </span>
                Min
              </span>
            </div>
          </div>
          <div className="descripts">
            <span className="description">Desc: {description}</span>
          </div>
          <div className="date">{this.renderDate()}</div>
        </div>
      );
    }
  }

  renderDate() {
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

    const finallyDate = `${day} de ${monthName} de ${year}`;

    return finallyDate;
  }

  renderInput() {
    return (
      <React.Fragment>
        <label>Cidade</label>

        <input
          type="text"
          name="NameCity"
          className="form-control"
          placeholder="Insira a cidade aqui..."
          value={this.state.city.NameCity}
          onChange={(e) => this.updateField(e)}
        />

        <button
          className="btn btn-primary mt-3 px-3 py-1 "
          onClick={(e) => this.getWeatherData()}
        >
          <i className="fa fa-search"></i>
        </button>

        <hr />
      </React.Fragment>
    );
  }

  renderAll() {
    return (
      <React.Fragment>
        {this.renderInput()}
        {this.renderWeatherData()}
      </React.Fragment>
    );
  }

  render() {
    return <Main {...headerProps}>{this.renderAll()} </Main>;
  }
}

export default getClima;
