import React, { Component } from "react";

function ContactPage() {
  return (
    <>
      <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-5">
        <div class="page-header-content">
          <div class="container d-flex justify-content-center">
            <div className="text-center">
              <h1 class="page-header-title mb-3">Contact Us</h1>
              <p class="page-header-text">
                Have questions? We're here to help!
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
          <div class="row">
            <div class="col-lg-4 mb-5">
              <a
                class="card card-link border-top border-top-lg border-primary lift text-center o-visible h-100"
                href="mailto: sales@nerdnibble.com"
              >
                <div class="card-body">
                  <div class="icon-stack icon-stack-xl bg-primary-soft text-primary mb-4 mt-n5 z-1 shadow">
                    <i class="far fa-user"></i>
                  </div>
                  <h5>Sales</h5>
                  <p class="card-text">
                    Ready to open an account? Have questions about purchasing a
                    product?
                  </p>
                </div>
                <div class="card-footer">
                  <div class="text-primary font-weight-bold d-inline-flex align-items-center">
                    Contact Sales<i class="fas fa-arrow-right text-xs ml-1"></i>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 mb-5">
              <a
                class="card card-link border-top border-top-lg border-secondary lift text-center o-visible h-100"
                href="mailto: support@nerdnibble.com"
              >
                <div class="card-body">
                  <div class="icon-stack icon-stack-xl bg-secondary-soft text-secondary mb-4 mt-n5 z-1 shadow">
                    <i class="far fa-life-ring"></i>
                  </div>
                  <h5>IT Support</h5>
                  <p class="card-text">
                    Need help with a product that you just purchased? Need help
                    with your account?
                  </p>
                </div>
                <div class="card-footer">
                  <div class="text-secondary font-weight-bold d-inline-flex align-items-center">
                    Contact IT Support
                    <i class="fas fa-arrow-right text-xs ml-1"></i>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 mb-5">
              <a
                class="card card-link border-top border-top-lg border-success lift text-center o-visible h-100"
                href="mailto: social@nerdnibble.com"
              >
                <div class="card-body">
                  <div class="icon-stack icon-stack-xl bg-success-soft text-success mb-4 mt-n5 z-1 shadow">
                    <i class="far fa-thumbs-up"></i>
                  </div>
                  <h5>Media</h5>
                  <p class="card-text">
                    Looking to contact our media team for a press release or
                    related story?
                  </p>
                </div>
                <div class="card-footer">
                  <div class="text-success font-weight-bold d-inline-flex align-items-center">
                    Contact Media<i class="fas fa-arrow-right text-xs ml-1"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="row justify-content-center text-center">
            <div class="col-lg-5 mb-5 mb-lg-0">
              <h5>Phone or In-Person?</h5>
              <p class="font-weight-light mb-0">
                No problem! Contact sales and we can schedule a phone call,
                meeting, or demonstration!
              </p>
            </div>
            <div class="col-lg-5">
              <h5>General Support</h5>
              <p class="font-weight-light mb-0">
                For any other support questions, please send us an email at{" "}
                <a href="mailto: info@nerdnibble.com">info@nerdnibble.com</a>
              </p>
            </div>
            <hr class="my-5 w-100" />
            <p class="m-0">
              For any legal concerns, please send us an email at{" "}
              <a href="mailto: legal@nerdnibble.com">legal@nerdnibble.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
