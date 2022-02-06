import React from "react";
import { Container, Info, Link } from "./FooterStyle";

const Footer = () => {
  return (
    <Container>
      <Info>
        Created by{" "}
        <Link href='https://github.com/surlejonathan' target='_blank'>
          surlejonathan
        </Link>{" "}
        - devChallenges.io
      </Info>
    </Container>
  );
};

export default Footer;
