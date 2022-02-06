import React, { useState } from "react";
import {
  SelectContainer,
  SelectWrapper,
  SelectLabel,
  SelectElement,
  LocationIcon,
  CountWrapper,
  Count,
  CountButton,
  Minus,
  Plus,
  CountContainer,
} from "./SelectStyle";
import { useDispatch, useSelector } from "react-redux";

const SelectForm = (props) => {
  const { expanded, locationInput, filteredLocation } = props;

  const [count, setCount] = useState({
    adults: 0,
    children: 0,
  });
  const { activeInput, guestInput: guests } = useSelector(
    (state) => state.navbar
  );
  const dispatch = useDispatch();

  /**
   * LOCATION
   */

  const dispatchLocation = (location) =>
    dispatch({ type: "navbar/SET_LOCATION", payload: location });

  const handleSelect = (payload) =>
    dispatch({ type: "navbar/handleSelect", payload: payload });

  const selectCity = (e) => {
    dispatchLocation(e.target.innerText.trim());
    handleSelect(e.target.innerText.trim());
  };

  /**
   * GUESTS
   */

  const setGuests = (payload) =>
    dispatch({ type: "navbar/SET_GUESTS", payload });

  const increment = (type) => {
    if (guests < 10) {
      setCount((prevCount) => ({
        ...prevCount,
        [type]: prevCount[type] + 1,
      }));
      setGuests(Number(guests) + 1);
    }
  };
  const decrement = (type) => {
    if (count[type] > 0) {
      setCount({ ...count, [type]: count[type] - 1 });
      setGuests(guests > 0 && Number(guests) - 1);
    }
  };

  return (
    <SelectContainer expanded={expanded}>
      <SelectWrapper isActive={activeInput === "location"} expanded={expanded}>
        {filteredLocation?.length > 0 ? (
          filteredLocation?.map((value, key) => (
            <SelectElement
              key={key}
              selected={locationInput === value && "selected"}
              onClick={selectCity}
            >
              <LocationIcon size={24} /> {value}
            </SelectElement>
          ))
        ) : (
          <div>No location found</div>
        )}
      </SelectWrapper>

      <SelectWrapper
        isActive={activeInput === "guests"}
        expanded={expanded}
        guests
      >
        <CountContainer>
          <SelectLabel>Adults</SelectLabel>
          <CountWrapper>
            <CountButton onClick={() => decrement("adults")}>
              <Minus size={30} />
            </CountButton>
            <Count>{count.adults}</Count>
            <CountButton onClick={() => increment("adults")}>
              <Plus size={30} />
            </CountButton>
          </CountWrapper>
        </CountContainer>

        <CountContainer>
          <SelectLabel>Children</SelectLabel>
          <CountWrapper>
            <CountButton onClick={() => decrement("children")}>
              <Minus size={30} />
            </CountButton>
            <Count>{count.children}</Count>
            <CountButton onClick={() => increment("children")}>
              <Plus size={30} />
            </CountButton>
          </CountWrapper>
        </CountContainer>
      </SelectWrapper>
      <SelectWrapper />
    </SelectContainer>
  );
};

export default SelectForm;
