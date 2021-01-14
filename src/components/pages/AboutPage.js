import React, { Component } from "react";

function AboutPage() {
  return (
    <>
      <header class="page-header page-header-dark bg-gradient-primary-to-secondary">
        <div class="page-header-content pt-10">
          <div class="container text-center">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <h1 class="page-header-title mb-3">About our company</h1>
                <p class="page-header-text">
                  Our company culture, and how we do things
                </p>
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
              <div className="row">
                <div className="col-lg-6">
                  <h4 class="mb-4">
                    <div class="icon-stack bg-primary text-white mr-2">
                      <i className="fas fa-globe-americas"></i>
                    </div>
                    A Michigan based company
                  </h4>
                  <p class="lead">
                    The company started in the Detroit metro area.
                  </p>
                  <p>
                    Two software engineers moved to the area after receiving job
                    offers from Ford Motor Company. Coming from small-town
                    roots, they had a passion for helping small-town businesses.
                  </p>
                  <p>
                    We serve many clients in the Michigan area. However, we are
                    a remote company and are open for business for everyone in
                    the United States.
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className="w-100 float-left card">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2205446.6033288045!2d-85.88518494554827!3d43.62002104002838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d4caa3dc7ca0411%3A0x97dd48597a62c9b3!2sMichigan!5e1!3m2!1sen!2sus!4v1610643972672!5m2!1sen!2sus"
                      height={350}
                      frameborder={0}
                      style={{ border: 0 }}
                      className=""
                      allowfullscreen
                      aria-hidden="false"
                      tabindex="0"
                    ></iframe>
                  </div>
                </div>
              </div>

              <hr class="my-5" />
              <h4 class="mb-4">
                <div class="icon-stack bg-primary text-white mr-2">
                  <i class="fas fa-store"></i>
                </div>
                What we do best
              </h4>
              <p className="lead">
                In short, we provide practical cloud-based software services.
              </p>
              <p>
                We create online platforms that enable you to accept online
                payments. This includes online ordering and e-commerce. If your
                business does not have an online presence or wants to improve
                their website, that is also something we offer.
              </p>
              <p>
                Ultimately, we make tools and services that help small
                businesses run better. Scheduling, inventory management, and
                online payments. We want to launch your business into the future
                with our practical software solutions.
              </p>

              <div class="card bg-light shadow-none">
                <div class="card-body">
                  <h6>Questions you should ask yourself</h6>
                  <ul class="mb-0">
                    <li class="text-italic">
                      What would make my customers happy?
                    </li>
                    <li class="text-italic">
                      How can I get more business from the younger generations?
                    </li>
                    <li class="text-italic">
                      What can be done to improve the reach of my business?
                    </li>
                    <li class="text-italic">Where can my business improve?</li>
                    <li class="text-italic">
                      Is there any tasks that could be automated?
                    </li>
                    <li class="text-italic">
                      How can I improve my overall sales?
                    </li>
                  </ul>
                </div>
              </div>
              <hr class="my-5" />
              <h4 class="mb-4">
                <div class="icon-stack bg-primary text-white mr-2">
                  <i class="fas fa-store"></i>
                </div>
                This is how we do it
              </h4>
              <p className="lead">
                Be a practical company that works with our clients to make them
                feel comfortable.
              </p>
              <p>
                We understand change is difficult. We aim to never push
                complicated software onto our clients. Before we suggest a
                solution, we try to understand your processes.
              </p>
              <p>
                We either suggest an existing solution or design a new one for
                you. Our software is supposed to make your business more money
                and help you run it better.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
