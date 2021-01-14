import React, { Component, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import logo from "../logo-white.png";

function Header() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
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
          <ul className="navbar-nav ml-auto mr-lg-5">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            {/* <li class="nav-item dropdown dropdown-xl no-caret">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownDemos" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Landings<i class="fas fa-chevron-right dropdown-arrow"></i></a>
                            <div class="dropdown-menu dropdown-menu-right animated--fade-in-up mr-lg-n15" aria-labelledby="navbarDropdownDemos">
                                <div class="row no-gutters">
                                    <div class="col-lg-5 p-lg-3 bg-img-cover overlay overlay-primary overlay-70 d-none d-lg-block" style={{ "background-image": "url('https://source.unsplash.com/mqO0Rf-PUMs/500x350')" }}>
                                        <div class="d-flex h-100 w-100 align-items-center justify-content-center">
                                            <div class="text-white text-center z-1">
                                                <div class="mb-3">Multipurpose landing pages for a variety of projects.</div>
                                                <a class="btn btn-white btn-sm text-primary rounded-pill" href="index.html">View All</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-7 p-lg-5">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <h6 class="dropdown-header text-primary">Applications</h6>
                                                <a class="dropdown-item" href="landing-app-mobile.html">Mobile App</a><a class="dropdown-item" href="landing-app-desktop.html">Desktop App</a>
                                                <div class="dropdown-divider border-0"></div>
                                                <h6 class="dropdown-header text-primary">Business</h6>
                                                <a class="dropdown-item" href="landing-multipurpose.html">Multipurpose</a><a class="dropdown-item" href="landing-agency.html">Agency</a><a class="dropdown-item" href="landing-press.html">Press</a><a class="dropdown-item" href="landing-directory.html">Directory</a><a class="dropdown-item" href="landing-rental.html">Rental</a><a class="dropdown-item" href="landing-real-estate.html">Real Estate</a><a class="dropdown-item" href="landing-classifieds.html">Classifieds</a>
                                                <div class="dropdown-divider border-0"></div>
                                                <h6 class="dropdown-header text-primary">Lead Generation</h6>
                                                <a class="dropdown-item" href="landing-lead-capture.html">Lead Capture</a>
                                                <div class="dropdown-divider border-0 d-lg-none"></div>
                                            </div>
                                            <div class="col-lg-6">
                                                <h6 class="dropdown-header text-primary">Personal</h6>
                                                <a class="dropdown-item" href="landing-resume.html">Resume</a><a class="dropdown-item" href="landing-portfolio.html">Portfolio</a>
                                                <div class="dropdown-divider border-0"></div>
                                                <h6 class="dropdown-header text-primary">Header Styles</h6>
                                                <a class="dropdown-item" href="header-basic.html">Basic</a><a class="dropdown-item" href="header-basic-signup.html">Basic (Signup)</a><a class="dropdown-item" href="header-graphic.html">Graphic</a><a class="dropdown-item" href="header-graphic-signup.html">Graphic (Signup)</a><a class="dropdown-item" href="header-inner-page.html">Inner Page</a><a class="dropdown-item" href="header-nav-only.html">Nav Only</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown dropdown-lg no-caret">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownPages" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages<i class="fas fa-chevron-right dropdown-arrow"></i></a>
                            <div class="dropdown-menu dropdown-menu-right animated--fade-in-up" aria-labelledby="navbarDropdownPages">
                                <div class="row no-gutters">
                                    <div class="col-lg-6 p-lg-5">
                                        <h6 class="dropdown-header text-primary">Company</h6>
                                        <a class="dropdown-item" href="page-basic.html">Basic Page</a><a class="dropdown-item" href="page-company-about.html">About</a><a class="dropdown-item" href="page-company-pricing.html">Pricing</a><a class="dropdown-item" href="page-company-contact.html">Contact</a><a class="dropdown-item" href="page-company-terms.html">Terms</a>
                                        <div class="dropdown-divider border-0"></div>
                                        <h6 class="dropdown-header text-primary">Support</h6>
                                        <a class="dropdown-item" href="page-help-center.html">Help Center</a><a class="dropdown-item" href="page-help-knowledgebase.html">Knowledgebase</a><a class="dropdown-item" href="page-help-message-center.html">Message Center</a><a class="dropdown-item" href="page-help-support-ticket.html">Support Ticket</a>
                                        <div class="dropdown-divider border-0 d-lg-none"></div>
                                    </div>
                                    <div class="col-lg-6 p-lg-5">
                                        <h6 class="dropdown-header text-primary">Careers</h6>
                                        <a class="dropdown-item" href="page-careers-overview.html">Careers List</a><a class="dropdown-item" href="page-careers-listing.html">Position Details</a>
                                        <div class="dropdown-divider border-0"></div>
                                        <h6 class="dropdown-header text-primary">Blog</h6>
                                        <a class="dropdown-item" href="page-blog-overview.html">Overview</a><a class="dropdown-item" href="page-blog-post.html">Post</a><a class="dropdown-item" href="page-blog-archive.html">Archive</a>
                                        <div class="dropdown-divider border-0"></div>
                                        <h6 class="dropdown-header text-primary">Portfolio</h6>
                                        <a class="dropdown-item" href="page-portfolio-grid.html">Grid</a><a class="dropdown-item" href="page-portfolio-large-grid.html">Large Grid</a><a class="dropdown-item" href="page-portfolio-masonry.html">Masonry</a><a class="dropdown-item" href="page-portfolio-case-study.html">Case Study</a><a class="dropdown-item" href="page-portfolio-project.html">Project</a>
                                    </div>
                                </div>
                            </div>
                        </li> */}
            <li class="nav-item dropdown no-caret">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdownDocs"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services<i class="fas fa-chevron-right dropdown-arrow"></i>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right animated--fade-in-up"
                aria-labelledby="navbarDropdownDocs"
              >
                <Link class="dropdown-item py-3" to="/services/online-ordering">
                  <div class="icon-stack bg-primary-soft text-primary mr-4">
                    <i class="fas fa-utensils"></i>
                  </div>
                  <div>
                    <div class="small text-gray-500">Online Ordering</div>
                    Enable your customers to order food online
                  </div>
                </Link>
                <div class="dropdown-divider m-0"></div>
                <Link
                  class="dropdown-item py-3"
                  to="/services/custom-solutions"
                >
                  <div class="icon-stack bg-primary-soft text-primary mr-4">
                    <i class="fas fa-code"></i>
                  </div>
                  <div>
                    <div class="small text-gray-500">Custom Services</div>
                    Solutions unique to your business needs
                  </div>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          {/* <a class="btn-teal btn rounded-pill px-4 ml-lg-4" href="https://auth.nerdnibble.com/login?client_id=5liepcnck7jsc1haicof8vkn9m&response_type=code&scope=openid&redirect_uri=https://dashboard.nerdnibble.com">Sign up / Login</a> */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
