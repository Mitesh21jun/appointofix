import React from 'react'
import Header from "./components/Header";
import Hero from "./components/Hero";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import Shops from './components/Shops';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Shops />
    </div>
  );
}

export default App;
