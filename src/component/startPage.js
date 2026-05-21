import "../myCss.css";
import { Container } from "react-bootstrap";
import "../App.css";
import StartPageCarousel from "./startPageCarousel";
import { useState } from "react";
import Page1 from "./Page1";

function Start() {
    const [showNext,setShowNext]= useState(false);

    return (
        <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 bg-desktop-black" >
            {!showNext && <StartPageCarousel onStart={() => setShowNext(true)} />}
            {showNext && <Page1></Page1>}
        </Container>
    );
}

export default Start;