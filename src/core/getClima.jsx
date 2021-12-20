import React, { Component } from "react";
import Main from "../components/Template/Main";

const headerProps = {
  title: "Previsão do tempo",
  subtitle: "Descubra como está e/ou estará o clima em sua cidade.",
  icon: "fa fa-cloud",
};

const initialState = {
  city: { NameCity: "", uf: "" },
};

class getClima extends Component {
  state = { ...initialState };

  constructor(props) {
    super(props);
    this.renderInput = this.renderInput.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  updateField(event) {
    const city = { ...this.state.city };
    city[event.target.name] = event.target.value;
    this.setState({ city });
  }

  renderInput() {
    return (
      <React.Fragment>
        <label className="mb-2">Cidade</label>
        <div class="input-group mb-3">
          <input
            type="text"
            name="NameCity"
            className="form-control"
            placeholder="Insira a cidade aqui..."
            value={this.state.city.NameCity}
            onChange={(e) => this.updateField(e)}
          />
          <div class="input-group-append">
            <button
              class="btn btn-primary "
              type="button"
              id="button-addon2"
              onClick={(e) => console.log(this.state.city.NameCity)}
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>

        <label className=" mb-3">Estado</label>
        <div className="input-group mb-3">
          <input
            type="text"
            name="uf"
            className="form-control"
            placeholder="Insira o Estado/UF aqui..."
            value={this.state.city.uf}
            onChange={(e) => this.updateField(e)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-secondary"
              onClick={(e) => console.log(this.state.city.uf)}
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>

        <hr />
      </React.Fragment>
    );
  }

  render() {
    return <Main {...headerProps}>{this.renderInput()} </Main>;
  }
}

export default getClima;
