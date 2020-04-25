import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
    from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Hero extends Component {

    render() {
        return (
            <div class="view full-page-intro peach-gradient">

                <div className="">
                    </div>

                <div class="mask d-flex justify-content-center align-items-center">

                    <div class="container">

                        <div class="row d-flex h-100 justify-content-center align-items-center wow fadeIn">

                            <div class="col-md-6 mb-4 white-text text-center text-md-left">

                                <h1 class="h1-responsive font-courier-prime-code">Serving Byte-sized Web Applications</h1>

                                <hr class="hr-light"></hr>

                                <p>
                                    <strong>Pulling small-town America into the forefront of the 21st century through the power of software.</strong>
                                </p>

                                <p class="mb-4 d-none d-md-block">
                                    <strong>Cloud-based solutions that enable your business. Devilering quality software ranging from the Hotel Reservations, Online Ordering, and Photography Portals. </strong>
                                </p>

                                <button type="button" class="btn btn-primary">About Us
                        <i class="fa fa-info ml-2"></i>
                                </button>
                                <button type="button" class="btn btn-primary">Products
                                <i class="fas fa-layer-group ml-2"></i>
                                </button>

                            </div>

                            <div class="col-md-6 col-xl-5 mb-4">

                                <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" alt="" class="img-fluid">
                                </img>
                            </div>


                        </div>


                    </div>


                </div>


            </div>

        );
    }
}

export default Hero;