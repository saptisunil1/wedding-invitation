import { useEffect, useState } from "react";
import logopik from "../images/logoSN.jpeg";
import "../mobile.css";
import QRCode from "react-qr-code";

function MobileOnly({ children }) {
  const [isMobile, setIsMobile] = useState(true);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);

    check();
    window.addEventListener("resize", check);

    setUrl(window.location.href);

    return () => window.removeEventListener("resize", check);
  }, []);

  if (!isMobile) {
    return (
      <div className="pink-page">

        <div className="pink-card">

          <img src={logopik} className="pink-logo" alt="logo" />

          <h1 className="pink-title">Wedding Invitation</h1>

          <p className="pink-subtitle">
            A beautiful experience designed for mobile viewing
          </p>

          <div className="pink-divider"></div>

          <p className="pink-text">
            Scan the QR code below to continue on your mobile device
          </p>

          <div className="qr-box-pink">
            <QRCode value={url} size={140} />
          </div>

          <p className="pink-note">💍 Best experienced on mobile</p>

        </div>

      </div>
    );
  }

  return children;
}

export default MobileOnly;