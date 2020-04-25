import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
    from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductRow from './ProductRow';
import $ from 'jquery';

class Products extends Component {

    componentDidMount() {
        document.title = 'Web Appetizer | Products';
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    render() {
        return (
            <div>
                <div className="container-fluid sunny-morning-gradient pt-5 z-depth-2">
                <h2 className="text-white pt-5 pb-4 h2-responsive font-courier-prime-code">Products</h2>
                </div>
                <div className="container">
                    <ProductRow/>
            </div>
            </div>
        );
    }
}

export default Products;