import "../myCss.css";
import "../App.css";
import StartPageCarousel from "./startPageCarousel";
import { Fragment, useState } from "react";
import Page1 from "./Page1";

function Start() {
    const [showNext,setShowNext]= useState(false);

    return (
        <Fragment className="d-flex justify-content-center align-items-center min-vh-100 bg-desktop-black" >
            {!showNext && <StartPageCarousel onStart={() => setShowNext(true)} />}
            {showNext && <Page1></Page1>}
        </Fragment>
    );
}

export default Start;