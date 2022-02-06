import { stays } from "../data/stays";

const filterLocation = (search) => {
  let originalSearch = stays
    .filter(
      (location) =>
        location.city.toLowerCase().startsWith(search.toLowerCase()) ||
        location.country.toLowerCase().startsWith(search.toLowerCase()) ||
        `${location.city}, ${location.country}`
          .toLowerCase()
          .startsWith(search.toLowerCase())
    )
    .map((loc) => `${loc.city}, ${loc.country}`);
  originalSearch = [...new Set(originalSearch)];
  return originalSearch;
};

export default filterLocation;
