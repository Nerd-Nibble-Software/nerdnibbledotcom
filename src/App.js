import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import CustomSolutionsPage from "./components/pages/services/custom-solutions/CustomSolutionsPage";
import OnlineOrderingPage from "./components/pages/services/online-ordering/OnlineOrderingPage";

function App() {
  return (
    <>
      <Router>
        <div id="layoutDefault">
          <div id="layoutDefault_content">
            <main>
              <Header id="navbar" key="navbar" />
              <Switch>
                <Route path="/" exact>
                  <HomePage />
                </Route>

                <Route path="/about" exact>
                  <AboutPage />
                </Route>

                <Route path="/services/online-ordering">
                    <OnlineOrderingPage />
                </Route>

                <Route path="/services/custom-solutions">
                    <CustomSolutionsPage />
                </Route>

                <Route path="/contact" exact>
                  <ContactPage />
                </Route>

                <Route path="*" exact>
                  <NotFoundPage />
                </Route>
              </Switch>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
