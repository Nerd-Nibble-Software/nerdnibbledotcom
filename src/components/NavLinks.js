import React, { Component, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import logo from "../logo-white.png";
import $ from "jquery";

function NavLinks() {
  return (
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
          <Link class="dropdown-item py-3" to="/services/custom-solutions">
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
  );
}

export default NavLinks;
