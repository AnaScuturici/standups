import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getAPIData, deleteGoal } from "./goalsAPI";
import "./styles/Goals.scss";
import { format } from 'date-fns';

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

const handleDelete = (id) => {
  deleteGoal(id);
  setGoals(goals.filter(goal => goal.id !== id));
}

const date = new Date();
const dateFormat = date.toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric"
})

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
              <button className='delete-btn' onClick={() => handleDelete(goal.id)}>x</button>
              <p className='title'>{goal.goal}</p>
              <p className='completed'>{goal.is_completed ? "Done" : "Not yet"}</p>
              <p className='rating'>Rating: {goal.rating}</p>
              <p className='date'>Added on: {format(new Date(goal.created_at), 'MMM do, yyyy')}</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Goals;
