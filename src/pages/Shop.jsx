import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import MainCarousels from "../components/MainCarousels";
import ScrollContainer from "../components/ScrollContainer.tsx";


export default function Shop() {
 

  return (
    <>
      <Container>
        <Row className="mt-3">
          <MainCarousels />
        </Row>
        <ScrollContainer />
      </Container>
    </>
  );
}
