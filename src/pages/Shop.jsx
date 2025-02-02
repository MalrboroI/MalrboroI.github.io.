import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Sidebar from "../components/SideBar/Sidebar.jsx";
import MainCarousels from "../components/MainCarousels";
import ScrollContainer from "../components/ScrollContainer.tsx";


export default function Shop() {
 

  return (
    <>
      <Sidebar />
      <Container>
        <Row className="mt-3">
          <MainCarousels />
        </Row>
        <ScrollContainer />
      </Container>
    </>
  );
}
