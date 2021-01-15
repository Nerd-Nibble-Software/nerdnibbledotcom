import React, { Component } from "react";
import { Link } from "react-router-dom";

import LOGISTICS_IMAGE from "../../../../assets/img/illustrations/undraw_logistics_x4dc.svg";
import ECCOMERCE_IMAGE from "../../../../assets/img/illustrations/undraw_add_to_cart_vkjp.svg";
import WAITING_IMAGE from "../../../../assets/img/illustrations/undraw_Queue_j6ij.svg";

function CustomSolutionsPage() {
  return (
    <>
      <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-5">
        <div class="page-header-content">
          <div class="container d-flex justify-content-center">
            <div className="text-center">
              <h1 class="page-header-title mb-3">Custom Software Solutions</h1>
              <p class="page-header-text">
                We can create software services that work for your specific
                business needs
              </p>
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
          <div class="row text-center">
            <div class="col-lg-4">
              <div class="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4">
                <i class="fas fa-code"></i>
              </div>
              <h3>Endless Capabilities</h3>
              <p class="mb-0">
                Choose from our existing cloud enabled services or create your
                own software solution.
              </p>
            </div>
            <div class="col-lg-4 mb-5 mb-lg-0">
              <div class="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4">
                <i class="fas fa-layer-group"></i>
              </div>
              <h3>Full Stack Solutions</h3>
              <p class="mb-0">
                Capable, end to end solutions that enable your business to
                connect to the online market.
              </p>
            </div>
            <div class="col-lg-4 mb-5 mb-lg-0">
              <div class="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <h3>Modern Responsive Design</h3>
              <p class="mb-0">
                Carefully crafted mobile-first software for your employees or
                customers to access with ease.
              </p>
            </div>
          </div>
        </div>
        <div class="svg-border-rounded text-light b-none">
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
          <div class="row align-items-center justify-content-center">
            <div
              class="col-md-9 col-lg-6 order-1 order-lg-0"
              data-aos="fade-right"
            >
              <div class="content-skewed content-skewed-right">
                <img
                  src={""}
                  alt="Nerd Nibble Software"
                  className="img-fluid"
                />
              </div>
            </div>
            <div
              class="col-lg-6 order-0 order-lg-1 mb-5 mb-lg-0"
              data-aos="fade-left"
            >
              <div class="mb-5">
                <h2>Here's What We Offer</h2>
                <p class="lead">
                  Choose from our existing cloud enabled services or create your
                  own software solution.
                </p>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <h6>Online Ordering</h6>
                  <p class="mb-2 small">
                    We've crafted an online ordering solution that works for
                    restraunts just like yours.
                  </p>
                  <Link
                    className="small text-arrow-icon"
                    to="/services/online-ordering"
                  >
                    Learn More<i class="fas fa-arrow-right ml-1"></i>
                  </Link>
                </div>
                <div class="col-md-6 mb-4">
                  <h6>Custom Solutions</h6>
                  <p class="mb-2 small mb-0">
                    Help your customers or employees by creating a custom
                    software solution that fits their needs.
                  </p>
                  <Link
                    className="small text-arrow-icon"
                    to="/services/custom-solutions"
                  >
                    Learn More<i class="fas fa-arrow-right ml-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="svg-border-rounded text-dark">
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
      <section class="bg-dark py-5">
        <div class="container text-center">
          <h2 class="text-white">Our Portfolio</h2>
          <p class="lead text-white-50 mb-5">
            A showcase of project's we've worked on in the past year
          </p>
          <div class="row">
            <div class="col-md-6 col-xl-4 mb-5 mt-n5" data-aos="fade">
              <a
                class="card card-portfolio h-100"
                href="https://www.thelewistonlodge.com/"
                target="_blank"
              >
                <img
                  class="card-img-top"
                  src={ECCOMERCE_IMAGE}
                  alt="Restaurant E-Commerce Website"
                />
                <div class="card-body">
                  <i class="fas fa-link mr-auto"> </i>
                  <div class="card-title">Restaurant E-Commerce Website</div>
                </div>
              </a>
            </div>
            <div class="col-md-6 col-xl-4 mb-5 mt-md-n5" data-aos="fade">
              <a
                class="card card-portfolio h-100"
                href="https://www.aircraftpartusa.com/"
                target="_blank"
              >
                <img
                  class="card-img-top"
                  src={LOGISTICS_IMAGE}
                  alt="Aircraft Part Catalog Search"
                />
                <div class="card-body">
                  <i class="fas fa-link mr-auto"> </i>
                  <div class="card-title">Aircraft Part Catalog Search</div>
                </div>
              </a>
            </div>
            <div class="col-md-6 col-xl-4 mb-5 mt-md-n5" data-aos="fade">
              <div class="card card-portfolio h-100">
                <img
                  class="card-img-top"
                  src={WAITING_IMAGE}
                  alt="Waiting List Notification App"
                />
                <div class="card-body">
                  <i class="fas fa-unlink mr-auto"> </i>
                  <div class="card-title">Waiting List Notification App</div>
                </div>
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
      </section>
      <section class="bg-white py-10">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mb-5 mb-lg-0 divider-right" data-aos="fade">
              <div class="testimonial p-lg-5">
                <p class="testimonial-quote text-primary">
                  "We get a lot of customers that ask about doing things online.
                  As a business owner, I want to make my customers happy but I'm
                  not a computer wizard. That's where you [Nerd Nibble] really
                  shine."
                </p>
                <div class="testimonial-name">Shannon LaPointe</div>
                <div class="testimonial-position">Restaurant Owner</div>
              </div>
            </div>
            <div class="col-lg-6" data-aos="fade" data-aos-delay="100">
              <div class="testimonial p-lg-5">
                <p class="testimonial-quote text-primary">
                  "After having trouble getting our site to work with GoDaddy
                  Site Builder, we realized we needed something more advanced...
                  That's just what we got!"
                </p>
                <div class="testimonial-name">Josh Dobrzelewski</div>
                <div class="testimonial-position">Manager</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomSolutionsPage;
