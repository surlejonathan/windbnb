import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../components/Navbar/NavbarSlice";
import modalReducer from "../components/Modal/ModalSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    modal: modalReducer,
  },
});
