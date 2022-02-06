import React from "react";
import Navbar from "../../components/Navbar";
import { Container } from "./HomeStyle";
import StaysList from "../../components/StaysList";
import Modal from "../../components/Modal";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <Container>
      <Modal />
      <Navbar />
      <StaysList />
      <Footer />
    </Container>
  );
};

export default Home;
