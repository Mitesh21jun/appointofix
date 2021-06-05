import React from 'react'
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import Hero from "./components/Hero";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <li className="nav-item">
      </li>
      
      <Switch>
          <Route
            exact
            path={['/', "/Hero"]}
            component={Hero}
        />
        </Switch>
    </div>
  );
}
export default App;