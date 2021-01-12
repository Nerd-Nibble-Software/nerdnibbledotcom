import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './components/pages/HomePage';

function App()  {


    return (
      <>
        <Router>
          <Switch>

            <Route path="/">
              <div id="layoutDefault">
                <div id="layoutDefault_content">
                  <main>
                    <Header id="navbar" key="navbar" route="/" />
                    <HomePage />
                  </main>
                </div>
                <Footer />
              </div>

            </Route>
          </Switch>
        </Router>
      </>
    );
  }

export default App;
