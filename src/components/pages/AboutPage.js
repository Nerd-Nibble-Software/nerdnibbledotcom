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
              <h2 class="mb-4">A quick guide to our company culture</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
                eos quisquam expedita quo officiis porro provident laborum.
                Earum, consequatur provident, ipsam at excepturi rerum laborum
                aliquam facere molestias mollitia recusandae.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                ipsam? Perspiciatis sunt voluptatum officia non harum, dolores
                omnis fugiat nam ad optio cumque molestiae impedit dignissimos
                velit commodi aliquid iure?
              </p>
              <p class="mb-0">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem sapiente natus architecto aut porro! Vitae iusto
                praesentium recusandae debitis, cumque illum amet suscipit rem
                pariatur, magni iure laborum inventore in!
              </p>
              <hr class="my-5" />
              <h4 class="mb-4">
                <div class="icon-stack bg-primary text-white mr-2">
                  <i data-feather="arrow-right"></i>
                </div>
                This is what we do
              </h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
                eos quisquam expedita quo officiis porro provident laborum.
                Earum, consequatur provident, ipsam at excepturi rerum laborum
                aliquam facere molestias mollitia recusandae.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                ipsam? Perspiciatis sunt voluptatum officia non harum, dolores
                omnis fugiat nam ad optio cumque molestiae impedit dignissimos
                velit commodi aliquid iure?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem sapiente natus architecto aut porro! Vitae iusto
                praesentium recusandae debitis, cumque illum amet suscipit rem
                pariatur, magni iure laborum inventore in!
              </p>
              <div class="card bg-light shadow-none">
                <div class="card-body">
                  <h6>Questions you should ask yourself</h6>
                  <ul class="mb-0">
                    <li class="text-italic">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed soluta fugiat eveniet, dignissimos facere quisquam,
                      odit suscipit aliquid magnam,?
                    </li>
                  </ul>
                </div>
              </div>
              <hr class="my-5" />
            </div>
            <div className="col-lg-4">
              <h4 class="mb-4">
                <div class="icon-stack bg-primary text-white mr-2">
                  <i className="fas fa-globe-americas"></i>
                </div>
                Michigan Grown Company
              </h4>
              <p class="lead">The company started in the Detroit metro area.</p>
              <p>
                Two software engineers moved to the area after receiving job
                offers from Ford Motor Company. Coming from small-town roots,
                they had a passion for helping small-town businesses.
              </p>
              <p>
                We serve many clients in the Michigan area. However, we are a
                remote company so we are open for business for everyone in the
                United States.
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
        </div>
      </section>
    </>
  );
}

export default AboutPage;
