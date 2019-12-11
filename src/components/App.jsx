import React from "react";
import BadgeNew from "../pages/BadgeNew.jsx";
import Badges from "../pages/Badges.jsx";
import Home from "../pages/Home";
import BadgeEdit from "../pages/BadgeEdit";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";
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
        <Route exact path="/badges/:badgeID/edit" component={BadgeEdit} />
        <Route exact path="/badges/:badgeID" component={BadgeDetailsContainer} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>

  );
};
export default App;