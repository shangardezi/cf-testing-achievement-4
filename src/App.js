import React from 'react';
import logo from './logo.svg';
import EventList from './EventList';
import CitySearch from './CitySearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <CitySearch />
      <EventList />
    </div>
  );
}

export default App;
