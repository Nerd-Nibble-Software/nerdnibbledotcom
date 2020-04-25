import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
    from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './Hero';
import Features from './Features';
import ProductRow from './ProductRow';
import $ from 'jquery';

class Home extends Component {

    componentDidMount() {
        document.title = 'Web Appetizer | Byte-sized Web Applications';
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    render() {
        return (
            <div>
                <Features />
                <ProductRow />
            </div>
        );
    }
}

export default Home;