import React, { useState, useEffect } from "react";
import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";
import PageLoading from "./PageLoading";
import Badge from "../components/Badge";
import { Link } from "react-router-dom";
import api from "../api";

const BadgeDetails = ({ match }) => {
  const [data, setData] = useState({
    data: undefined,
    error: null,
    loading: true
  });
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    setData({ ...data, error: null, loading: true });
    try {
      const response = await api.badges.read(match.params.badgeID);
      setData({ ...data, data: response, loading: false });
    } catch (error) {
      setData({ ...data, loading: false, error: error });
    }
  };

  return (
    <>
      {data.error ? (
        <>Hay un error {data.error.message}</>
      ) : (
        <>
          {data.loading ? (
            <PageLoading />
          ) : (
            <>
              <div className="BadgeDetails__hero">
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <img src={confLogo} alt="Logo de la conferencia" />
                    </div>
                    <div className="col-6 BadgeDetails__hero-attendant-name">
                      <h1>
                        {data.data.firstName} {data.data.lastName}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col">
                    <Badge
                      firstName={data.data.firstName}
                      lastName={data.data.lastName}
                      jobTitle={data.data.jobTitle}
                      twitter={data.data.twitter}
                      email={data.data.email}
                    />
                  </div>
                  <div className="col">
                      <h2>Actions</h2>
                      <div>
                          <Link className="btn btn-primary mb-4" to={`/badges/${data.data.id}/edit`}>Edit</Link>
                      </div>
                      <div>
                          <button className="btn btn-danger">Delete</button>
                      </div>
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

export default BadgeDetails;