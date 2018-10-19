import React, { Component } from "react";
import "./App.css";
import i18n from "i18n-json-file";

class App extends Component {
  state = {
    locale: "en"
  };
  componentWillMount() {
    i18n.setLocale(this.state.locale);
  }

  handleChange = event => {
    this.setState({ locale: event.target.value });
    i18n.setLocale(event.target.value);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <strong>{i18n.__("Hello")}</strong>,
          </p>
          <p>{i18n.__("This text will be translated")}!</p>
          <select onChange={this.handleChange} value={this.state.locale}>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
            <option value="pt">Português</option>
          </select>
        </header>
      </div>
    );
  }
}

export default App;
