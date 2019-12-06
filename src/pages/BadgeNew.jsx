import React, { useState } from "react";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

const BadgeNew = () => {
  const [form, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: ""
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img src={header} className="img-fluid" alt="logo" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName="Javier"
              lastName="Fuentes"
              twitter="@javier_mora94"
              jobTitle="Frontend engineer"
              gravatar="http://1.gravatar.com/avatar/6735114339474bf800a704cbc73355a4"
            />
          </div>
          <div className="col">
            <BadgeForm handleSubmit={handleSubmit} handleInput={handleInput} form={form} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BadgeNew;
