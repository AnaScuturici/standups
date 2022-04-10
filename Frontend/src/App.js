import './App.css';
import Goals from './components/Goals';
import axios from "axios";
import { useState, useEffect } from 'react';

const API_URL = "http://[::1]:3000/api/v1/standups";

const getAPIData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
}

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(()=> {
    let mounted = true;
    getAPIData().then(items => {
      if(mounted){
        setGoals(items);
      }
    });
    return () => mounted = false;
  }, []);

  return (
    <div className="App">
      <h1>Standups</h1>
      <Goals goals={goals}/>
    </div>
  );
}

export default App;
