# i18n-react-json

[![Build Status](https://travis-ci.com/gasparteixeira/i18n-react-json.svg?branch=master)](https://travis-ci.com/gasparteixeira/i18n-react-json)

![i18n-react-json](https://user-images.githubusercontent.com/390818/47250702-4bae5f80-d3f4-11e8-8ce8-de33556b3a53.gif)

A simple translator for Reactjs load languages from json file.

## Install

In your react project, run one of these commands:

```sh
$ yarn add i18n-react-json
```

or

```sh
$ npm i i18n-react-json
```

## Configuration

Lets create your files respository, for example: "locales"

```
|--project
  |--public
  |--src
    |--locales
      |-- en.json
      |-- pt.json
```

In the json file, for example:

```js
// pt.json
{
    "Hello" : "Olá",
    "I am Gaspar": "Eu sou Gaspar"
}
```

## Using it

In your App.js lets import and set the language.

```js
//project/src/App.js
import Translate from "i18n-react-json";
import locales from "./locales";

// call tranlation
const i18n = new Translate(locales);

//set default language
i18n.setLocale("pt");

class App extends Component {
render() {
    return (
      <div className="App">
        <p>{i18n.__("Hello")}, {i18n.__("I am Gaspar")}!</p>
      </div>
    );
}
export default App;
```

I also provided an [example](https://github.com/gasparteixeira/i18n-react-json/tree/master/example) take a look or download it and run in your environment.
