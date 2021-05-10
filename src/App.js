import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home"
import {Switch,Route,Redirect} from "react-router-dom"
import './App.css';

function App() {
  return (
  <>
  <NavBar/>
  <Switch>
  <Route extra path="/" component={Home} />
  <Redirect to="/" />
  </Switch>
  </>
  );
}

export default App;
