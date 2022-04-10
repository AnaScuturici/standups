import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';

const API_URL = "http://[::1]:3000/api/v1/standups";

const getAPIData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
}

const Goals = ()  => {
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
    <div>
      <h3>API data</h3>
      {goals.map(goal =>{
          return (
              <div key={goal.id}>
                  <p>Goal: {goal.goal}</p>
                  <p>Done: {goal.is_completed ? "Done" : "Not yet"}</p>
                  <p>Rating: {goal.rating}</p>
                  <p>Added on: {goal.created_at}</p>
              </div>
          )
      })}
    </div>
  )
}

export default Goals;
