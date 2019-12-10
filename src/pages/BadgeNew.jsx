import React, { useState } from "react";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import PageLoading from "./PageLoading";

const BadgeNew = (props) => {
  const [form, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: "",
    gravatar: "http://1.gravatar.com/avatar/6735114339474bf800a704cbc73355a4",
    loading: false,
    error: null
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = async event => {
    event.preventDefault();
    setValues({ loading: true, error: null });

    try {
      await api.badges.create(form);
      setValues({ loading: false });
      props.history.push('/badges')
    } catch (error) {
      setValues({ loading: false, error: error });
    }
  };
  return (
    <>
      {form.error ? (
        <>Hay un error {form.error.message}</>
      ) : (
        <>
          {form.loading ? (
            <PageLoading />
          ) : (
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
                      firstName={form.firstName || "Primer nombre"}
                      lastName={form.lastName || "Apellido"}
                      twitter={form.twitter || "Twitter"}
                      jobTitle={form.jobTitle || "Trabajo"}
                      gravatar={form.gravatar || "Avatar"}
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
          )}
        </>
      )}
    </>
  );
};

export default BadgeNew;
