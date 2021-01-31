import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Tugas9 from '../Tugas-9/Tugas-9.js';
import Tugas10 from '../Tugas-10/Tugas-10.js';
import Tugas11 from '../Tugas-11/Tugas-11.js';
import Tugas12 from '../Tugas-12/Tugas-12.js';
import Tugas13 from '../Tugas-13/Tugas-13.js';
import Tugas14 from '../Tugas-14/DaftarBuah.js';
import Tugas15 from '../Tugas-15/SwitchTheme';
import Nav from './Nav';
import { ThemeProvider } from "./ThemeContext";

export default function App() {
  return (
      <>
        <Router>
          <ThemeProvider>
            <Nav/>
            <Switch>
              <Route exact path="/">
                <Tugas9 />
              </Route>

              <Route exact path="/tugas10">
                <Tugas10 />
              </Route>

              <Route exact path="/tugas11">
                <Tugas11 start={200} />
              </Route>

              <Route exact path="/tugas12">
                <Tugas12 />
              </Route>
              
              <Route exact path="/tugas13">
                <Tugas13 />
              </Route>

              <Route exact path="/tugas14">
                <Tugas14 />
              </Route>

              <Route exact path="/tugas15">
                <Tugas15 />
              </Route>
            
            </Switch>
          </ThemeProvider>
        </Router>    
      </>
  );
}
