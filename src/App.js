import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home"
import Service from "./Service"
import Contact from "./Contact"
import About from "./About"
import Navbar from "./Navbar"
import Blog from "./Blog"
 const App=()=>{
  return( <>
  <Navbar/>
   <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} /> 
     <Route path="/service" component={Service} />
      <Route path="/Blog" component={Blog} />
     <Redirect to="/"/>
   </Switch>
   </>)
 }
 export default App