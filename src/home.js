import React from "react";

import Badge_android from "./assets/images/app-badge-android.png";
import Badge_iOS from "./assets/images/app-badge-ios.png";
import PromoVideo_android from "./assets/video/promo.webm";
import PromoVideo_iOS from "./assets/video/promo-ios.webm";
import PromoPlaceholder_android from "./assets/images/app-screen.png";
import PromoPlaceholder_iOS from "./assets/images/app-screen-ios.png";

const Home = () => {
  const [os, setOS] = React.useState(0);

  return (
    <div className="home" style={{ textAlign: "center" }}>
      <section>
        <div className="os-toggle">
          <a
            href="/"
            className={os === 0 ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setOS(0);
            }}
          >
            iOS
          </a>
          <a
            href="/"
            className={os === 1 ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setOS(1);
            }}
          >
            Android
          </a>
        </div>
        {os === 0 && (
          <video
            muted
            loop
            autoPlay
            poster={PromoPlaceholder_iOS}
            style={{ width: "100%", maxWidth: 300, borderRadius: 8 }}
          >
            <source src={PromoVideo_iOS} type="video/webm" />
          </video>
        )}
        {os === 1 && (
          <video
            muted
            loop
            autoPlay
            poster={PromoPlaceholder_android}
            style={{ width: "100%", maxWidth: 300, borderRadius: 8 }}
          >
            <source src={PromoVideo_android} type="video/webm" />
          </video>
        )}
      </section>
      <br />
      <section>
        <h1>Download</h1>
        <div className="app-badges" id="download">
          <a
            href="https://apps.apple.com/app/id1528056717"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="ios" src={Badge_iOS} alt="iOS" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=co.chksndapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="android" src={Badge_android} alt="Android" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
