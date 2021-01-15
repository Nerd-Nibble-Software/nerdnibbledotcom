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

      <section class="bg-white pt-10">
        <div class="container">
          {/* <div class="row">
            <div class="col-lg-8 mb-5">
              <h2>A better way to capture leads</h2>
              <p class="lead">
                When we design a custom solution, it is highly coolaberative between us and you.
              </p>
              <p>
                In short, we provide practical cloud-based software services. We
                create online platforms that enable you to accept online
                payments. This includes online ordering and e-commerce. If your
                business does not have an online presence or wants to improve
                their website, that is also something we offer. Ultimately, we
                make tools and services that help small businesses run better.
                Scheduling, inventory management, and online payments. We want
                to launch your business into the future with our practical
                software solutions.
              </p>
            </div>
          </div> */}
          <div class="row mb-n10 z-1">
            <div class="col-lg-6 mb-5">
              <div class="card h-100">
                <div class="card-body p-5">
                  <div class="icon-stack icon-stack-xl bg-secondary-soft text-secondary mb-4">
                    <i class="fas fa-handshake"></i>
                  </div>
                  <h5>Collaborative design</h5>
                  <p class="card-text">
                    Change is difficult. We aim to never push complicated
                    software onto our clients. Before we suggest a solution, we
                    try to understand your processes.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-5">
              <div class="card h-100">
                <div class="card-body p-5">
                  <div class="icon-stack icon-stack-xl bg-success-soft text-success mb-4">
                    <i class="fas fa-chart-line"></i>
                  </div>
                  <h5>Increase your revenue</h5>
                  <p class="card-text">
                    Find solutions that help your small businesses run better.
                    Whether it is scheduling, inventory management, online
                    payments, ect., your small business has potential for
                    growth.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="card h-100">
                <div class="card-body p-5">
                  <div class="icon-stack icon-stack-xl bg-primary-soft text-primary mb-4">
                    <i class="fas fa-smile"></i>
                  </div>
                  <h5>User satisfaction</h5>
                  <p class="card-text">
                    Make your users happy by tailoring your business to meet
                    their exact needs. Whether it is your customer or your
                    employee, meet them online so they can buy or work
                    efficiently.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card h-100">
                <div class="card-body p-5">
                  <div class="icon-stack icon-stack-xl bg-light-soft text-dark mb-4">
                    <i class="fas fa-hand-holding-usd"></i>
                  </div>
                  <h5>Dynamic pricing</h5>
                  <p class="card-text">
                    Every solution is unique, therefore they all have different
                    price points. Typically, there is an initial service cost
                    for us to build the tailored solution. We are flexible and
                    will determine the pricing strategy with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row align-items-center mt-5">
            <div className="d-flex m-auto">
              <h4 class="my-auto">Let's discuss a solution for you!</h4>
              <Link
                class="btn btn-primary btn-marketing rounded-pill mx-3 lift lift-sm"
                to="contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div class="svg-border-angled text-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <polygon points="0,100 100,0 100,100"></polygon>
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

        <div class="svg-border-angled text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <polygon points="0,100 100,0 100,100"></polygon>
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
