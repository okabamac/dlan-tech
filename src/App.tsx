import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/404Page";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Services from "./components/Services";

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home}/>
          <Route exact path={process.env.PUBLIC_URL + "/services"} component={Services}/>
          <Route exact path={process.env.PUBLIC_URL + "/contact"} component={Contact}/>
          <Route path={process.env.PUBLIC_URL + "*"} component={NotFound}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
};

export default App;
