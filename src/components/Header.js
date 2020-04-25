import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
    from 'mdbreact';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: props.route,
            isOpen: false
        };
    }

    componentWillReceiveProps(props) {
        let oldRoute = this.state.route;
        let newRoute = props.route;
        if (oldRoute != newRoute) {
            this.setState({ route: props.route, isOpen: false });
        }
    }

    navbarToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <MDBNavbar color="unique-color-dark" scrolling="true" transparent={this.state.route === "/"} dark expand="md" className="fixed-top">
                <div class="container">
                    <Link to="/" class="navbar-brand">
                        <strong><span className="logo-1">Web</span> <span className="logo-2">Appetizer</span><i class="fas fa-utensils ml-1"></i></strong>
                    </Link>

                    <MDBNavbarToggler onClick={this.navbarToggle} className="pr-3 mr-2">
                        <i className={"fas fa-times fa-lg animated " + (this.state.isOpen ? "slow fadeIn" : "faster fadeOut")} style={{ height: 0, width: 0 }}></i>
                        <i className={"fas fa-bars fa-lg animated " + (this.state.isOpen ? "faster fadeOut" : "slow fadeIn")} style={{ height: 0, width: 0 }}></i>
                    </MDBNavbarToggler>


                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>


                        <MDBNavbarNav right>
                            <MDBNavItem active={this.state.route === "/"}>
                                <MDBNavLink to="/">Home
                                </MDBNavLink >
                            </MDBNavItem>
                            <MDBNavItem active={this.state.route === "/about"}>
                                <MDBNavLink to="/about">About
                                </MDBNavLink >
                            </MDBNavItem>
                            <MDBNavItem active={this.state.route === "/products"}>
                                <MDBNavLink to="/products">Products
                                </MDBNavLink >
                            </MDBNavItem>
                            <MDBNavItem active={this.state.route === "/contact"}>
                                <MDBNavLink to="/contact">Contact
                                </MDBNavLink >
                            </MDBNavItem>
                            <MDBNavItem active={this.state.route === "/account"}>
                                <MDBNavLink className="btn btn-primary btn-sm" to="/account">Login / Signup
                                </MDBNavLink >
                            </MDBNavItem>
                        </MDBNavbarNav>


                    </MDBCollapse>

                </div>
            </MDBNavbar>
        );
    }
}

export default Header;
