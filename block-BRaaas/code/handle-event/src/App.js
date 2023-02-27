import logo from "./logo.svg";
import "./App.css";

import Component1 from "./Components/Component1/Component1";
import Component2 from "./Components/Component2/Component2";
import "./Components/component.css";
import Component3 from "./Components/Component3/Component3";

function App() {
  return (
    <div className="App">
      <div className="component-container">
        <Component1></Component1>
        <Component2></Component2>
        <Component3></Component3>
      </div>
    </div>
  );
}

export default App;
