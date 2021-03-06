import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./styles/Tracker.scss";
import { format } from 'date-fns';
import { getAPIData } from "./goalsAPI";
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const Tracker = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    getAPIData().then(items => {
      setGoals(items);
    });
  }, []);

  const data = {
    labels: goals
      .map(goal => format(new Date(goal.created_at), 'MMM do, yyyy'))
      .slice(-7),
    datasets: [{
      data: goals.map(goal => goal.rating),
      borderColor: [
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 2
    }]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  }

  return (
    <div>
      <div className='title-div'>
        <h2>WEEKLY TRACKER</h2>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>

      <div className='chart-div'>
        <Chart
          type="line"
          data={data}
          options={options}
        />
      </div>
    </div>
  )
}

export default Tracker;