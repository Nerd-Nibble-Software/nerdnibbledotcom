import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
    from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import $ from 'jquery';

class About extends Component {

    componentDidMount() {
        document.title = 'Web Appetizer | About';
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    render() {
        return (
            <div>
                <div className="container-fluid sunny-morning-gradient pt-5 z-depth-2">
                    <h2 className="text-white pt-5 pb-4 h2-responsive font-courier-prime-code">About</h2>
                </div>
                <div className="container" style={{ height: 1000 }}>
                    Hello, this is an about page
            </div>
            </div>
        );
    }
}

export default About;