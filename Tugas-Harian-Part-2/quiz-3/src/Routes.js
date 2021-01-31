import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './index1.js';
import About from './index2.js';
import BooksListEditor from './index3.js';
import { ThemeProvider } from "./ThemeContext.js";
import Nav from './Nav.js'
export default function App(){
    return(
        <>
        <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet" />
        <link href="public/css/style.css" rel="stylesheet" type="text/css" />
        <header id="head">
           
            <Router>
            <ThemeProvider>
                <Nav/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/About">
                        <About/>
                    </Route>
                    <Route exact path="/Edit-Buku">
                        <BooksListEditor/>
                    </Route>
                </Switch>
            </ThemeProvider>
        </Router>
      </header>
       
        </>
    )
}