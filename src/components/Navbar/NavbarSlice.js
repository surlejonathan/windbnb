import { createSlice } from "@reduxjs/toolkit";
import filterLocation from "../../hooks/filterLocation";

const originalSearch = filterLocation("Finland");

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    expanded: false,
    activeInput: "location",
    locationInput: "Finland",
    guestInput: null,
    filteredLocation: originalSearch,
    selectedCity: "",
    search: {
      location: "Finland",
      guests: null,
    },
  },
  reducers: {
    handleExpansion: (state, action) => {
      state.expanded = action.payload;
    },
    SET_ACTIVE_INPUT: (state, action) => {
      state.activeInput = action.payload;
    },

    SET_LOCATION: (state, action) => {
      state.locationInput = action.payload;
    },
    RESET_LOCATION: (state) => {
      state.locationInput = "";
    },
    SET_GUESTS: (state, action) => {
      state.guestInput = action.payload;
    },

    SET_FILTERED_LOCATION: (state, action) => {
      state.filteredLocation = action.payload;
    },

    RESET_FILTER: (state) => {
      state.filteredLocation = originalSearch;
    },
    handleSelect: (state, action) => {
      state.selectedCity = action.payload;
    },
    handleSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const {
  handleExpansion,
  SET_ACTIVE_INPUT,
  SET_GUESTS,
  handleSearch,
  SET_LOCATION,
  handleSelect,
  SET_FILTERED_LOCATION,
  RESET_FILTER,
  RESET_LOCATION,
} = navbarSlice.actions;

export default navbarSlice.reducer;
