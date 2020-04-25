import React, { Component } from 'react';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import stock1 from '../images/office_desk.jpg';

class Features extends Component {

    renderContent() {
        return (
            <section class="p-md-3 mx-md-5 text-lg-left">
                <div class="row text-center d-flex justify-content-center pt-4 mt-4 peach-text">
                    <div class="col-md-4 mb-5 pl-4 pr-4">
                        <i class="fa fa-tools fa-3x mb-4"></i>
                        <h4 class="font-weight-bold mb-4">Best Tools</h4>
                        <p class="text-white px-2 mb-lg-0">
                            Using technology stacks that make sense. Creating practical solutions for your small-to-medium sized business.
          </p>
                    </div>
                    <div class="col-md-4 mb-5 pl-4 pr-4">
                        <i class="fa fa-store-alt fa-3x mb-4"></i>
                        <h4 class="font-weight-bold mb-4">Personilization</h4>
                        <p class="text-white px-2 mb-lg-0">
                            We're always looking to expand our suite of software and would be happy to develop a new product that works for you.
          </p>
                    </div>
                    <div class="col-md-4 mb-5 pl-4 pr-4">
                        <i class="fa fa-cloud fa-3x mb-4"></i>
                        <h4 class="font-weight-bold mb-4">Access Everywhere</h4>
                        <p class="text-white px-2 mb-md-0">
                            Software is deployed on the latest cloud technologies to be accessible from anywhere.
          </p>
                    </div>
                </div>
            </section>
        );
    }

    render() {
        return (
            <div className="container-fluid m-0 p-0">
                <ParallaxBanner layers={[{ image: stock1, amount: 0.2, expanded: true }]} className="view d-md-none" style={{ height: 800 }}>
                    <div class="mask flex-center night-fade-gradient-rgba rgba-black-light"> </div>
                    {this.renderContent()}
                </ParallaxBanner>
                <ParallaxBanner layers={[{ image: stock1, amount: 0.2, expanded: true }]} className="view d-none d-md-block" style={{ height: 350 }}>
                    <div class="mask flex-center night-fade-gradient-rgba rgba-black-light"> </div>
                    {this.renderContent()}
                </ParallaxBanner>
            </div>
        );
    }
}

export default Features;
