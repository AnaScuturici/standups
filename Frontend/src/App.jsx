import './App.scss';
import AddGoal from './components/AddGoal';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AddGoal />
    </div>
  );
}

export default App;
