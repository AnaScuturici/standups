import React, { useState } from 'react';
import "./styles/AddGoal.scss";
import { addNewGoal } from './goalsAPI';

const AddGoal = () => {
    const [formValues, setFormValues] = useState({
        goal: "",
        is_completed: false,
        rating: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(formValues);
        addNewGoal(formValues);
        resetForm();
    }

    const resetForm = () => {
        setFormValues({
            goal: "",
            is_completed: false,
            rating: "",
        })
    }

    return (
        <div className='add-goal'>
            <form method='post' onSubmit={handleSubmit}>
                <div>
                    <h4>What is your goal for today?</h4>
                    <input
                        className='goal-input'
                        type="text"
                        value={formValues.goal}
                        onChange={(e) => setFormValues({ ...formValues, goal: e.target.value })}
                    />
                    {/* <button type="submit">Send</button> */}
                </div>
                <div>
                    <h4>How much did you accomplish today?</h4>
                    <div className='radio-container'>
                        <div>
                            <label htmlFor="formRating">1</label>
                            <input
                                type="radio"
                                name="rating"
                                value={1}
                                checked={formValues.rating === 1}
                                onChange={(e) => setFormValues({ ...formValues, rating: e.target.value })} />
                        </div>

                        <div>
                            <label htmlFor="formRating">2</label>
                            <input type="radio"
                                name="rating"
                                value={2}
                                checked={formValues.rating === 2}
                                onChange={(e) => setFormValues({ ...formValues, rating: e.target.value })} />
                        </div>

                        <div>
                            <label htmlFor="formRating">3</label>
                            <input type="radio"
                                name="rating"
                                value={3}
                                checked={formValues.rating === 3}
                                onChange={(e) => setFormValues({ ...formValues, rating: e.target.value })} />
                        </div>

                        <div>
                            <label htmlFor="formRating">4</label>
                            <input type="radio"
                                name="rating"
                                value={4}
                                checked={formValues.rating === 4}
                                onChange={(e) => setFormValues({ ...formValues, rating: e.target.value })} />
                        </div>

                        <div>
                            <label htmlFor="formRating">5</label>
                            <input
                                type="radio"
                                name="rating"
                                value={5}
                                checked={formValues.rating === 5}
                                onChange={(e) => setFormValues({ ...formValues, rating: e.target.value })} />
                        </div>
                    </div>
                    <button type="submit" onClick={() => setFormValues({ ...formValues, is_completed: true })}>Send</button>
                </div>
            </form>
        </div>
    )
}

export default AddGoal;
