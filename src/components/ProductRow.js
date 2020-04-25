import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
    "mdbreact";
    import stockHotel from '../images/hotel.jpg';
    import stockOrder from '../images/order.jpg';
    import stockPhotography from '../images/photography2.jpg';

const ProductRow = () => {
    return (
        <MDBContainer className="pt-5 pb-3">
            <div className="row">
                <div className="col-lg-4 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <img class="card-img-top" src={stockHotel} alt="Card image cap">
                        </img>

                        <div class="card-body">
                            <h4 class="card-title">Hotel Reservations</h4>

                            <p class="card-text">Use our hotel POS system to manage your hotel suites. Have customers book their rooms online. No more need to call and track everything by paper. We handle reservations and payments.</p>

                            <a href="#">Learn More<i class="fas fa-external-link-alt ml-1"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <img class="card-img-top" src={stockPhotography} alt="Card image cap">
                        </img>

                        <div class="card-body">
                            <h4 class="card-title">Photographer Portal</h4>

                            <p class="card-text">Need a home for your photography business? A place for clients to view and download your photos with enough customization that represents you and what you stand for.</p>

                            <a href="#">Learn More<i class="fas fa-external-link-alt ml-1"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 d-flex align-items-stretch">
                    <div class="card mb-4">
                        <img class="card-img-top" src={stockOrder} alt="Card image cap">
                        </img>

                        <div class="card-body">
                            <h4 class="card-title">Online Ordering</h4>

                            <p class="card-text">Join the rest of the food industry by introducing online ordering to your restraunt(s) today! Integrate with your own website seamlessly to let your customers buy the way they want.</p>

                            <a href="#">Learn More<i class="fas fa-external-link-alt ml-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-primary mb-3">See All Products
                                <i class="fas fa-layer-group ml-2"></i>
            </button>
        </MDBContainer>
    );
}

export default ProductRow;
