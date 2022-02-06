import React from "react";
import {
  Container,
  DescriptionContainer,
  Image,
  ImageContainer,
  Rating,
  Star,
  Type,
  SuperHost,
  TitleContainer,
} from "./CardStyle";

const Card = (props) => {
  const { title, photo, superHost, type, rating, beds } = props;

  return (
    <Container>
      <ImageContainer>
        <Image src={photo} alt={title} />
      </ImageContainer>
      <DescriptionContainer>
        {superHost && <SuperHost>SUPER HOST</SuperHost>}
        <Type>
          {type}
          {beds && `.${beds} beds`}
        </Type>
        <Rating>
          <Star size={14} />
          {rating}
        </Rating>
      </DescriptionContainer>
      <TitleContainer>{title}</TitleContainer>
    </Container>
  );
};

export default Card;
