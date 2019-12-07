import React from "react";
import BadgeNew from "../pages/BadgeNew.jsx";
import Badges from "../pages/Badges.jsx";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound.jsx";
import Navbar from "../components/Navbar.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
