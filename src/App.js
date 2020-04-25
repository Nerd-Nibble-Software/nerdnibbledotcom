import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import CarouselPage from './components/ProductRow';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from './components/Products';
import Contact from './components/Contact';
import Home from './components/Home';

class App extends Component {

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <ParallaxProvider>
            <Switch>
              <Route path="/about" exact>
                <Header id="navbar" key="navbar" route="/about" />
                <About />
              </Route>
              <Route path="/products" exact>
                <Header id="navbar" key="navbar" route="/products" />
                <Products />
              </Route>
              <Route path="/contact" exact>
                <Header id="navbar" key="navbar" route="/contact" />
                <Contact />
              </Route>
              <Route path="/">
                <Header id="navbar" key="navbar" route="/" />
                <header>
                  <Hero />
                </header>
                <Home />
              </Route>
            </Switch>
            <Footer />
          </ParallaxProvider>
        </Router>
      </div>
    );
  }
}

export default App;
