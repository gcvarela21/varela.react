import React from "react";
// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyWork from "./pages/MyWork";
import "./App.css";


function App() {
  return (
    <>
    <Router basename="/" >
    <Header />
    <Nav />
    <Switch>
      <Route exact path={["/", "/varela.react"]} component={Landing} />
      <Route exact path={"/about"} component={About} />
      <Route exact path={"/contact"} component={Contact} />
      <Route exact path={"/work"} component={MyWork} />
      <Route component={Landing} />
    </Switch>
    <Footer />
    </Router>
    </>
  );
}

export default App;
