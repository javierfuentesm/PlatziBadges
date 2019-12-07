import React from "react";
import ReactDOM from "react-dom";
import BadgeNew from "./pages/BadgeNew.jsx";
import Badges from "./pages/Badges.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badges />, container);
