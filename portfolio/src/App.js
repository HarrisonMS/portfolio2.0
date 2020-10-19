import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Footer from "../src/components/Footer";
import Projects from "../src/components/Projects";
import About from "../src/components/About";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </div>
    </Router>
  );
}

export default App;
