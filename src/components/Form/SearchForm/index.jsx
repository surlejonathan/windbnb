import React from "react";
import {
  Searchbar,
  ButtonIcon,
  InputGroup,
  InputLabel,
  Input,
  SearchButton,
} from "./SearchStyle";
import { useSelector, useDispatch } from "react-redux";
import filterLocation from "../../../hooks/filterLocation";

const SearchForm = (props) => {
  const { expanded, handleSubmit, expand, disabled } = props;

  const { locationInput, guestInput: guests } = useSelector(
    (state) => state.navbar
  );

  const originalSearch = filterLocation("Finland");

  const dispatch = useDispatch();

  const setActiveInput = (payload) =>
    dispatch({ type: "navbar/SET_ACTIVE_INPUT", payload: payload });

  /**
   * LOCATION
   */
  const dispatchLocation = (location) =>
    dispatch({ type: "navbar/SET_LOCATION", payload: location });

  const setFilteredLocation = (location) =>
    dispatch({ type: "navbar/SET_FILTERED_LOCATION", payload: location });

  const handleSelect = (payload) =>
    dispatch({ type: "navbar/handleSelect", payload: payload });

  const handleLocation = (e) => {
    handleSelect(null);
    const searchLocation = e.target.value;
    dispatchLocation(searchLocation);
    const newSearch = filterLocation(searchLocation);
    if (searchLocation === null) {
      setFilteredLocation(originalSearch);
    } else {
      setFilteredLocation(newSearch);
    }
  };

  return (
    <Searchbar expanded={expanded}>
      <InputGroup border expanded={expanded} flex={3} onClick={expand}>
        {expanded && <InputLabel>LOCATION</InputLabel>}
        <Input
          id='location'
          placeholder='Add location'
          value={locationInput}
          expanded={expanded}
          onFocus={(e) => {
            setActiveInput(e.target.id);
          }}
          onChange={handleLocation}
        />
      </InputGroup>
      <InputGroup border expanded={expanded} flex={2.3} onClick={expand}>
        {expanded && <InputLabel>GUESTS</InputLabel>}
        <Input
          id='guests'
          readOnly
          placeholder='Add guests'
          value={guests > 0 ? guests + (guests > 1 ? " guests" : " guest") : ""}
          expanded={expanded}
          onFocus={(e) => setActiveInput(e.target.id)}
        />
      </InputGroup>
      <InputGroup expanded={expanded} flex={1} button>
        <SearchButton
          disabled={disabled}
          expanded={expanded}
          onClick={handleSubmit}
        >
          <ButtonIcon size={expanded ? 18 : 24} expanded={expanded} />
          {expanded ? "Search" : null}
        </SearchButton>
      </InputGroup>
    </Searchbar>
  );
};

export default SearchForm;
