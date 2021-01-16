import React, { Component } from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import logo from "../logo-white.png";

function Footer() {
  return (
    <>
      <section class="bg-white p-0 m-0">
        <div class="svg-border-rounded text-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 144.54 17.34"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
          </svg>
        </div>
      </section>
      <section class="bg-light py-10">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <h4>Ready to get started?</h4>
              <p class="lead mb-5 mb-lg-0 text-gray-500">
                Let's start discussing the solutions that will help your
                business.
              </p>
            </div>
            <div class="col-lg-6 text-lg-right">
              <Link
                class="btn btn-primary btn-marketing rounded-pill mr-3 my-2 lift lift-sm"
                to="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        {/* <div class="svg-border-rounded text-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 144.54 17.34"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
          </svg>
        </div> */}
      </section>
      <div id="layoutDefault_footer">
        <footer class="footer bg-dark footer-dark">
          <div class="container py-5">
            <div className="row">
              <div className="col-md-6 text-center text-white d-flex">
                <div className="m-auto">
                  <Link to="/" alt="Nerd Nibble Software">
                    <h1 class="navbar-brand text-white m-0">
                      <img src={logo} style={{ height: 40 }} />
                      <span className="mr-5">Nerd Nibble Software</span>
                    </h1>
                  </Link>
                  <p className="font-weight-light text-light m-0">
                    Pulling small-town America into the forefront of the
                    <br />
                    21st century through the power of software.
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-left text-lg-center">
                <NavLinks />
              </div>
            </div>
          </div>
          <div className="container my-0 py-0">
            <hr className="m-0" />
          </div>
          <div class="container py-5">
            <div class="row align-items-center">
              <div class="col-md-6 small">
                2021 Copyright &copy; Nerd Nibble Software, LLC
              </div>
              {/* <div class="col-md-6 text-md-right small">
              <a href="javascript:void(0);">Privacy Policy</a>
              &middot;
              <a href="javascript:void(0);">Terms &amp; Conditions</a>
            </div> */}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
