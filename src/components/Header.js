import React, { Component, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import NavLinks from "./NavLinks";
import logo from "../logo-white.png";
import $ from "jquery";

function Header() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    $(".navbar-collapse").collapse("hide");
  }, [location]);

  return (
    <nav class="navbar navbar-marketing navbar-expand-lg bg-transparent navbar-dark fixed-top">
      <div class="container">
        <Link to="/" alt="Nerd Nibble Software">
          <div class="navbar-brand text-white">
            <img src={logo} style={{ height: 60 }} />
            {/* <span className="ml-2">Nerd Nibble Software</span> */}
          </div>
        </Link>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            transform="scale(2)"
          >
            <path
              class="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path class="line line2" d="M 20,50 H 80" />
            <path
              class="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavLinks />
          {/* <a class="btn-teal btn rounded-pill px-4 ml-lg-4" href="https://auth.nerdnibble.com/login?client_id=5liepcnck7jsc1haicof8vkn9m&response_type=code&scope=openid&redirect_uri=https://dashboard.nerdnibble.com">Sign up / Login</a> */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
