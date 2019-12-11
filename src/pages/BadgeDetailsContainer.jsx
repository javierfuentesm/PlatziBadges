import React, { useState, useEffect } from "react";
import BadgeDetails from '../pages/BadgeDetails'
import api from "../api";

const BadgeDetailsContainer = ({ match }) => {
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
  <BadgeDetails data={data} />
  );
};

export default BadgeDetailsContainer;
