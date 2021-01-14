import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import LOST_IMAGE from "../../assets/img/illustrations/undraw_lost_online_wqob.svg";

function AboutPage() {
  return (
    <>
      <header class="page-header page-header-dark bg-dark pt-0">
        <img
          src={LOST_IMAGE}
          alt="Page Not Found"
          className="img-fluid float-left"
          style={{ position: "absolute" }}
        />
        <div class="page-header-content pt-10">
          <div class="text-center pt-10">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <h1 class="page-header-title mb-5"></h1>
              </div>
            </div>
          </div>
        </div>
        <div class="svg-border-rounded text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 144.54 17.34"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
          </svg>
        </div>
      </header>
      <section class="bg-white py-10">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <h2 class="mb-4">404 Error: Page Not Found</h2>
              <p>
                The page you are looking for does not exist yet. It could be
                under construction or you may have accidentically ended up here.
              </p>
              <p>
                Click <Link to="/">here</Link> to return back to our home page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
