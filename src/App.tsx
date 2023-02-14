import React from 'react';
import NavigationBar from './components /NavigationBar';
import { Routes, Route } from 'react-router-dom';
import Members from './components /Members';
import Home from './components /Home';

const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
      </Routes>
    </div>
  );
}

export default App;
