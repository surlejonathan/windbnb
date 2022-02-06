import React from "react";
import { stays } from "../../data/stays";
import Card from "../Card";
import {
  Container,
  TitleContainer,
  Title,
  StaysQuantity,
  ListContainer,
} from "./StaysListStyle";
import { useSelector } from "react-redux";

const StaysList = () => {
  const selector = useSelector((state) => ({
    search: state.navbar.search,
  }));

  const { location, guests } = selector.search;

  const search = location.split(",")[0];

  const filteredResults = stays.filter(
    (stay) =>
      (`${stay.city}, ${stay.country}` === location ||
        stay.city.startsWith(location) ||
        stay.country.startsWith(location)) &&
      stay.maxGuests >= guests
  );

  const staysQuantity = filteredResults.length;
  return (
    <Container>
      <TitleContainer>
        <Title>Stays in {search}</Title>
        <StaysQuantity>
          {staysQuantity} {staysQuantity > 1 ? "stays" : "stay"}
        </StaysQuantity>
      </TitleContainer>
      <ListContainer>
        {location || guests
          ? filteredResults.map((stay, i) => (
              <Card key={`${stay.title}-${i}`} {...stay} />
            ))
          : stays.map((stay, i) => (
              <Card key={`${stay.title}-${i}`} {...stay} />
            ))}
      </ListContainer>
    </Container>
  );
};

export default StaysList;
