import React from "react";
import ReactDOM from "react-dom";
import "./styles/Modal.css";
const Modal = ({ handleModal, children, isOpen }) => {
  if (isOpen) {
    return (
      <>
        {ReactDOM.createPortal(
          <div className="Modal">
            <div className="Modal__container">
              <button onClick={handleModal} className="Modal__close-button ">
                X
              </button>
              {children}
            </div>
          </div>,
          document.getElementById("modal")
        )}
      </>
    );
  } else {
    return null;
  }
};
export default Modal;
