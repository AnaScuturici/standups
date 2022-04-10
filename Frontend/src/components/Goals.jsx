import React from 'react';

function Goals(props) {
  return (
    <div>
      <h3>API data</h3>
      {props.goals.map(goal =>{
          return (
              <div key={goal.id}>
                  <p>Goal: {goal.goal}</p>
                  <p>Rating: {goal.rating}</p>
              </div>
          )
      })}
    </div>
  )
}

export default Goals;
