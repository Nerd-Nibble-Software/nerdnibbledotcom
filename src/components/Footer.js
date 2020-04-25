import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
  from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Footer extends Component {

  render() {
    return (
      <footer class="page-footer font-small unique-color-dark pt-4">

        <div class="container">

          <ul class="list-unstyled list-inline text-center py-2">
            <li class="list-inline-item">
              <h5 class="mb-1">Let's Talk Business!</h5>
            </li>
            <li class="list-inline-item">
              <a href="#!" class="btn btn-outline-white">Contact Us</a>
            </li>
          </ul>

        </div>

        <div class="footer-copyright text-center py-3">© 2020
        Nerd Nibble Software, LLC
  <br></br>
          <small>nerdnibble.com, webappetizer.com, webappetizer.app</small>
        </div>

      </footer>
    );
  }
}

export default Footer;
