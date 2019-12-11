import React, { useState, useEffect } from "react";
import BadgeDetails from "../pages/BadgeDetails";
import api from "../api";

const BadgeDetailsContainer = ({ match, history }) => {
  const [data, setData] = useState({
    data: undefined,
    error: null,
    loading: true,
    modalIsOpen: false
  });
  useEffect(() => {
    fetchdata();
  }, []);
  const handleModal = e => {
    setData({ ...data, modalIsOpen: !data.modalIsOpen });
  };
  const deleteBadge = async e => {
    setData({ ...data, error: null, loading: true });
    try {
      await api.badges.remove(match.params.badgeID);
      setData({ ...data, loading: false });
      history.push("/badges");
    } catch (error) {
      setData({ ...data, loading: false, error: error });
    }
  };

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
    <BadgeDetails
      data={data}
      isOpen={data.modalIsOpen}
      deleteBadge={deleteBadge}
      handleModal={handleModal}
    />
  );
};

export default BadgeDetailsContainer;
