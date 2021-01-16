import React, { Component } from "react";
import { Link } from "react-router-dom";

import LOGISTICS_IMAGE from "../../../../assets/img/illustrations/undraw_logistics_x4dc.svg";
import ECCOMERCE_IMAGE from "../../../../assets/img/illustrations/undraw_add_to_cart_vkjp.svg";
import WAITING_IMAGE from "../../../../assets/img/illustrations/undraw_Queue_j6ij.svg";

function OnlineOrderingPage() {
  return (
    <>
      <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-5">
        <div class="page-header-content">
          <div class="container d-flex justify-content-center">
            <div className="text-center">
              <div class="badge badge-transparent-light badge-pill badge-marketing">
                Coming soon
              </div>
              <h1 class="page-header-title mb-3">Online Ordering Software</h1>
              <p class="page-header-text">
                Expand your restaurant by selling your delivery and take out
                online
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

      <section class="bg-white pt-5">
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
              <div class="card h-100" data-aos="fade-up">
                <div class="card-body p-5">
                  <div class="icon-stack icon-stack-xl bg-primary-soft text-primary mb-4">
                    <i class="fas fa-hamburger"></i>
                  </div>
                  <h5>Sell food online</h5>
                  <p class="card-text">
                    Customer's are ordering food online more than they ever
                    have. Upgrade your business and make your delicious menu
                    more accessible.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-5">
              <div class="card h-100" data-aos="fade-up">
                <div class="card-body p-5">
                  <div class="icon-stack icon-stack-xl bg-light text-dark mb-4">
                    <i class="fas fa-chart-line"></i>
                  </div>
                  <h5>Increase sales</h5>
                  <p class="card-text">
                    Many customer prefer restraunts that offer online ordering.
                    Increase your sales by providing them this convenience. The
                    future is happening and you can benefit from it.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="card h-100" data-aos="fade-up">
                <div class="card-body p-5">
                  <div class="icon-stack icon-stack-xl bg-success-soft text-success mb-4">
                    <i class="fas fa-tachometer-alt"></i>
                  </div>
                  <h5>Improved efficiency</h5>
                  <p class="card-text">
                    Your employees spend less time answering the phone and
                    proccessing payments. Orders and payments are 100% online,
                    saving your business time. We also provide reports that
                    include collected sales, taxes, and fees which saves you
                    from any manual calculations.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card h-100" data-aos="fade-up">
                <div class="card-body p-5">
                  <div class="icon-stack icon-stack-xl bg-secondary-soft text-secondary mb-4">
                    <i class="fas fa-hand-holding-usd"></i>
                  </div>
                  <h5>Dynamic pricing plans</h5>
                  <p class="card-text">
                    Pricing for our software includes different plans. Since
                    this is an ongoing service, we offer a monthly fixed rate or
                    a percent (%) of sales. The percent (%) of sales can be paid
                    by you or through an online convenience fee charged to the
                    customer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          <div class="row align-items-center" data-aos="fade-right">
            <div class="col-lg-9 p-0 mb-3">
              <h4>Coming soon</h4>
              <p class="lead mb-2 mb-lg-0 text-gray-500">
                Unfortunately, online ordering is not available yet. We still
                welcome you to contact us and we will reach out once its ready!
              </p>
            </div>
            <div class="col-lg-3 text-lg-right p-0">
              <Link
                class="btn btn-primary btn-marketing rounded-pill mr-3 my-2 lift lift-sm"
                to="/contact"
                data-aos="fade-right"
              >
                Contact Us
              </Link>
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
          <h2 class="text-white">A Simple Proccess</h2>
          <p class="lead text-white-50">
            After your account is created, you can edit your menu and business
            information. We will host an online ordering webpage for you. You
            simply send your customers to this page. People often do this by
            placing a link on their website. If you do not have a website, we
            can create one for you for a seperate cost.
          </p>
          <p class="text-white-50">
            When an order is placed, you will receive the notification through a
            tablet, printer, and/or computer. If you have your own tablet, it
            will need to meet our requirements. Otherwise, we do offer equipment
            rental.
          </p>
          <p class="text-white-50">
            After you get the notification, prepare the customers order. The
            order is in your hands now. If the customer is picking up their
            order, there is no need to proccess the payment, we have already
            done that for you.
          </p>
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
        <div class="container text-center">
          <h1>Will be available in 2021.</h1>
        </div>
      </section>
    </>
  );
}

export default OnlineOrderingPage;
