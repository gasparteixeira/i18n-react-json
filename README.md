# i18n-react-json

![i18n-react-json](https://user-images.githubusercontent.com/390818/47250702-4bae5f80-d3f4-11e8-8ce8-de33556b3a53.gif)

A simple translator for react loading languages from json file.

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

Lets create your files respository "locales"

```
|--project
  |--locales
    |-- en.json
    |-- pt.json
  |--public
  |--src
```

In the json file, for example potuguese:

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
import i18n from "i18n-react-json"
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
