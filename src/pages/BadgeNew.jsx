import React, { useState } from "react";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

const BadgeNew = () => {
  const [form, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: "",
    gravatar: "http://1.gravatar.com/avatar/6735114339474bf800a704cbc73355a4"
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
       
        <div className="BadgeNew__hero">
          <img src={header} className="img-fluid" alt="logo" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={form.firstName}
              lastName={form.lastName}
              twitter={form.twitter}
              jobTitle={form.jobTitle}
              gravatar={form.gravatar}
            />
          </div>
          <div className="col">
            <BadgeForm
              handleSubmit={handleSubmit}
              handleInput={handleInput}
              form={form}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BadgeNew;
