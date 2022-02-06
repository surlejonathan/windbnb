import React from "react";
import {
  Nav,
  Left,
  Right,
  Logo,
  NavContainer,
  InputContainer,
  MobileSearchButton,
  EditContainer,
  CloseIcon,
  MobileSearchButtonContainer,
} from "./NavbarStyle";
import WindBnbLogo from "../../assets/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import SelectForm from "../Form/SelectForm/index";
import SearchForm from "../Form/SearchForm";
import { ButtonIcon } from "../Form/SearchForm/SearchStyle";

const Navbar = () => {
  const {
    expanded,
    locationInput,
    filteredLocation,
    selectedCity,
    guestInput: guests,
  } = useSelector((state) => state.navbar);

  const dispatch = useDispatch();

  const dispatchLocation = (location) =>
    dispatch({ type: "navbar/SET_LOCATION", payload: location });

  const handleModal = (payload) =>
    dispatch({ type: "navbar/SET_MODAL", payload });

  const expand = () => {
    dispatch({ type: "navbar/handleExpansion", payload: true });
    handleModal(true);
  };

  const close = () => {
    dispatch({ type: "navbar/handleExpansion", payload: false });
    handleModal(false);
    if (filteredLocation.length === 0) {
      dispatch({ type: "navbar/RESET_LOCATION" });
      dispatch({ type: "navbar/RESET_FILTER" });
    }
  };

  const disabled =
    !selectedCity &&
    locationInput !== "Finland" &&
    locationInput !== "" &&
    !(filteredLocation.length > 0 && !selectedCity);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "navbar/handleSearch",
      payload: {
        location:
          selectedCity ||
          (locationInput === "Finland" && "Finland") ||
          (locationInput === "" && "Finland") ||
          (filteredLocation.length > 0 && !selectedCity && "Finland"),
        guests,
      },
    });
    locationInput &&
      filteredLocation.length > 0 &&
      !selectedCity &&
      dispatchLocation("Finland");
    close();
  };

  const refresh = () => {
    window.location.reload();
  };

  const props = {
    expanded,
    handleSubmit,
    filteredLocation,
    expand,
    disabled,
    locationInput,
  };

  return (
    <Nav expanded={expanded}>
      <NavContainer>
        <EditContainer expanded={expanded}>
          <div>Edit your search</div>
          <CloseIcon size={28} onClick={close} />
        </EditContainer>
        <InputContainer>
          <Left expanded={expanded} onClick={refresh}>
            <Logo src={WindBnbLogo} alt='logo' expanded={expanded} />
          </Left>
          <Right expanded={expanded}>
            <SearchForm {...props} />
            <SelectForm {...props} />
          </Right>
        </InputContainer>
        <MobileSearchButtonContainer>
          <MobileSearchButton
            disabled={disabled}
            expanded={expanded}
            onClick={handleSubmit}
          >
            <ButtonIcon size={expanded ? 18 : 24} expanded={expanded} />
            {expanded ? "Search" : null}
          </MobileSearchButton>
        </MobileSearchButtonContainer>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
