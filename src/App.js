import React from 'react'
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import ShopsList from "./components/ShopsList";
import Hero from "./components/Hero";
import { Link, Route, Switch } from "react-router-dom";

function App(searchText,category) {
  return (
    <div className="App">
      <Header />
      <li className="nav-item">
      </li>

      <Switch>
        <Route
          exact
          path={['/', "/hero"]}
          component={Hero}
        />
        <Route
          exact
          path={["/shops/:searchText"]}
          component={ShopsList}
          category={category}
          searchText={searchText}
          Props='Props'
        />
      </Switch>
    </div>
  );
}
export default App;