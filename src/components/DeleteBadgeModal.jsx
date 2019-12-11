import React from "react";
import Modal from "./Modal";
const DeleteBadgeModal = ({ isOpen, handleModal ,deleteBadge}) => {
  return (
    <Modal isOpen={isOpen} handleModal={handleModal}>
      <h1>Are you sure ?</h1>
      <p>You are about to delete this badge</p>
      <button onClick={deleteBadge} className="btn btn-danger mr-4">Delete </button>
      <button onClick={handleModal} className="btn btn-primary">Cancel </button>
    </Modal>
  );
};

export default DeleteBadgeModal;
