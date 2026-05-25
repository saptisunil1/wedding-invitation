import "../myCss.css";
import "../App.css";
import StartPageCarousel from "./startPageCarousel";
import { Fragment, useState } from "react";
import Page1 from "./Page1";
import MobileOnly from "./mobilePage";

function Start() {
    const [showNext, setShowNext] = useState(false);

    return (
        <MobileOnly>
            <Fragment className="d-flex justify-content-center align-items-center min-vh-100 bg-desktop-black" >
                {!showNext && <StartPageCarousel onStart={() => setShowNext(true)} />}
                {showNext && <Page1></Page1>}
            </Fragment>
        </MobileOnly>
    );
}

export default Start;