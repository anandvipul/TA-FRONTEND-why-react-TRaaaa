import logo from "./logo.svg";
import "./App.css";

import Component1 from "./Components/Component1/Component1";
import Component2 from "./Components/Component2/Component2";
import "./Components/component.css";
import Component3 from "./Components/Component3/Component3";
import Component4 from "./Components/Component4/Component4";
import Component5 from "./Components/Component5/Component5";

function App() {
  return (
    <div className="App">
      <div className="component-container">
        <Component1></Component1>
        <Component2></Component2>
        <Component3></Component3>
        <Component4></Component4>
        <Component5></Component5>
      </div>
    </div>
  );
}

export default App;
