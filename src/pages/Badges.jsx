import React, { useState, useEffect } from "react";
import BadgesList from "../components/BadgesList";
import PageLoading from "./PageLoading";
import confLogo from "../images/badge-header.svg";
import api from "../api";
import "./styles/Badges.css";
const Badges = () => {
  const [data, setData] = useState({
    data: undefined,
    error: null,
    loading: true
  });
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await api.badges.list();
      setData({ ...data, data: response, loading: false });
    } catch (error) {
      console.log(error);
      setData({ ...data, loading: false, error: error });
      console.log(data);
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
              <div className="Badges">
                <div className="Badges__hero">
                  <div className="Badges__container">
                    <img
                      className="Badges__conf-logo"
                      src={confLogo}
                      alt="Conf Logo"
                    />
                  </div>
                </div>
              </div>

              <div className="Badges__list">
                <div className="Badges__container">
                  <BadgesList data={data} />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Badges;
