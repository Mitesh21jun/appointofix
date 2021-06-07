import React from 'react'
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import ShopsList from "./components/ShopsList";
import Hero from "./components/Hero";
import { Link, Route, Switch } from "react-router-dom";

function App(searchText) {
  return (
    <div className="App">
      <Header searchText={searchText}/>
      <li className="nav-item">
      </li>

      <Switch>
        <Route
          exact
          path={['/', "/hero"]}
          component={Hero}
        />
        <Route
          path={["/shops/:searchText"]}
          component={ShopsList}
          searchText={searchText}
        />
      </Switch>
    </div>
  );
}
export default App;