import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
    from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import $ from 'jquery';

class Contact extends Component {

    componentDidMount() {
        document.title = 'Web Appetizer | Contact';
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    render() {
        return (
            <div>
                <div className="container-fluid sunny-morning-gradient pt-5 z-depth-2">
                    <h2 className="text-white pt-5 pb-4 h2-responsive font-courier-prime-code">Contact</h2>
                </div>
                <div className="container" style={{ height: 1000 }}>
                    Hello, this is a contact page
            </div>
            </div>
        );
    }
}

export default Contact;