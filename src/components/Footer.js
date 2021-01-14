import React, { Component } from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

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
        <div class="container mt-5">
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
                to="contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <div id="layoutDefault_footer">
        <footer class="footer py-5 mt-auto bg-dark footer-dark">
          <div class="container">
            {/* <div class="row">
            <div class="col-lg-3">
              <div class="footer-brand">Nerd Nibble Software</div>
              <div class="mb-3">Serving byte-sized software</div>
              <div class="icon-list-social mb-5">
                <a class="icon-list-social-link" href="javascript:void(0);">
                  <i class="fab fa-instagram"></i>
                </a>
                <a class="icon-list-social-link" href="javascript:void(0);">
                  <i class="fab fa-facebook"></i>
                </a>
                <a class="icon-list-social-link" href="javascript:void(0);">
                  <i class="fab fa-github"></i>
                </a>
                <a class="icon-list-social-link" href="javascript:void(0);">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="row">
                <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                  <div class="text-uppercase-expanded text-xs mb-4">
                    Company
                  </div>
                  <ul class="list-unstyled mb-0">
                    <li class="mb-2">
                      <a href="javascript:void(0);">Home</a>
                    </li>
                    <li class="mb-2">
                      <a href="javascript:void(0);">About</a>
                    </li>
                    <li class="mb-2">
                      <a href="javascript:void(0);">Contact</a>
                    </li>
                    <li class="mb-2">
                      <a href="javascript:void(0);">Documentation</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Changelog</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                  <div class="text-uppercase-expanded text-xs mb-4">
                    Technical
                  </div>
                  <ul class="list-unstyled mb-0">
                    <li class="mb-2">
                      <a href="javascript:void(0);">Documentation</a>
                    </li>
                    <li class="mb-2">
                      <a href="javascript:void(0);">Changelog</a>
                    </li>
                    <li class="mb-2">
                      <a href="javascript:void(0);">Theme Customizer</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">UI Kit</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                  <div class="text-uppercase-expanded text-xs mb-4">
                    Includes
                  </div>
                  <ul class="list-unstyled mb-0">
                    <li class="mb-2">
                      <a href="javascript:void(0);">Utilities</a>
                    </li>
                    <li class="mb-2">
                      <a href="javascript:void(0);">Components</a>
                    </li>
                    <li class="mb-2">
                      <a href="javascript:void(0);">Layouts</a>
                    </li>
                    <li class="mb-2">
                      <a href="javascript:void(0);">Code Samples</a>
                    </li>
                    <li class="mb-2">
                      <a href="javascript:void(0);">Products</a>
                    </li>
                    <li class="mb-2">
                      <a href="javascript:void(0);">Affiliates</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Updates</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="text-uppercase-expanded text-xs mb-4">Legal</div>
                  <ul class="list-unstyled mb-0">
                    <li class="mb-2">
                      <a href="javascript:void(0);">Privacy Policy</a>
                    </li>
                    <li class="mb-2">
                      <a href="javascript:void(0);">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">License</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-5" /> */}
            <div class="row align-items-center">
              <div class="col-md-6 small">
                Copyright &copy; Nerd Nibble Software, LLC
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
