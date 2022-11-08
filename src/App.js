import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import countriesData from './countries.json';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = 'https://ih-countries-api.herokuapp.com/countries';

    axios.get(url).then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
