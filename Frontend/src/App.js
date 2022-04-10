import './App.css';
import Goals from './components/Goals';
import axios from "axios";

const API_URL = "http://[::1]:3000/api/v1/standups";

const getAPIData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
}

function App() {

  return (
    <div className="App">
      <h1>Standups</h1>
      <Goals/>
    </div>
  );
}

export default App;
