import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/"component={Home}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/contact"/>
      </Switch>
    </div>
    </BrowserRouter>
  );
};

export default App;
