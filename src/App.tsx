import React from 'react';
import "./App.css"
import NavigationBar from './components /NavigationBar';
import { Routes, Route } from 'react-router-dom';
import Members from './components /Members';
import Home from './components /Home';
import Details from './components /Details';
import Cart from './components /Cart';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="details/:id"  element={<Details />} />
          <Route path="cart"  element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
