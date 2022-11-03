import React from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes, HashRouter, Link, useLocation } from "react-router-dom";

import "./index.css";

import Home from "./home";
import Privacy from "./privacy";
import Terms from "./terms";
import Cookies from "./cookies";
import OpenSource from "./open-source";

const NotFound = () => (
  <div>
    <section style={{ textAlign: "center" }}>
      <iframe
        title="404"
        src="https://giphy.com/embed/xTiN0L7EW5trfOvEk0"
        width="100%"
        height="600px"
        frameBorder="0"
        allowFullScreen
      />
    </section>
  </div>
);

const App = () => {
  let { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <div className="header">
        <Link to="/">
          <div className="logo" />
        </Link>
      </div>
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/open-source" element={<OpenSource />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <div className="footer">
        <div className="social">
          <a
            href="https://instagram.com/chksnd.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-lg" />
          </a>
          <a
            href="https://tiktok.com/@chksnd.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-tiktok fa-lg" />
          </a>
          <a
            href="https://github.com/chksnd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-lg" />
          </a>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/cookies">Cookies</Link>
        </div>
      </div>
      <div className="credits">
        <a
          href="https://heyaibek.github.io"
          className="rainbow"
          target="_blank"
          rel="noopener noreferrer"
        >
          &lt;/&gt; by @heyaibek
        </a>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <HashRouter basename="/">
    <App />
  </HashRouter>
);
