import React from "react";
import { Container } from "./ModalStyle";
import { useDispatch, useSelector } from "react-redux";

const Modal = ({ children }) => {
  const { expanded, filteredLocation } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();

  const close = (e) => {
    if (expanded && e.target.className.includes("container")) {
      dispatch({ type: "navbar/handleExpansion", payload: false });
      if (filteredLocation.length === 0) {
        dispatch({ type: "navbar/RESET_LOCATION" });
        dispatch({ type: "navbar/RESET_FILTER" });
      }
    }
  };

  return (
    <>
      {expanded ? (
        <Container isOpen={expanded} className='container' onClick={close}>
          {children}
        </Container>
      ) : (
        children
      )}
    </>
  );
};

export default Modal;
