import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getAPIData } from "./goalsAPI";
import "./styles/Goals.scss";

const Goals = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then(items => {
      if (mounted) {
        setGoals(items);
      }
    });
    return () => mounted = false;
  }, []);

  return (
    <div>
      <div className='title-div'>
        <h2>Goals history</h2>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>

      <div className='container'>
        {goals.map(goal => {
          return (
            <div className="goal-div" key={goal.id}>
              <p className='title'>{goal.goal}</p>
              <p className='completed'>{goal.is_completed ? "Done" : "Not yet"}</p>
              <p className='rating'>Rating: {goal.rating}</p>
              <p className='date'>Added on: {goal.created_at}</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Goals;
