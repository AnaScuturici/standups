import React from 'react';
import "./styles/AddGoal.scss";

const AddGoal = () => {
    return (
        <div className='add-goal'>
            <form>
                <div>
                    <h4>What is your goal for today?</h4>
                    <input
                        className='goal-input'
                        type="text"
                    />
                    <button type="submit">Send</button>
                </div>
                <div>
                    <h4>How much did you accomplish today?</h4>
                    <div className='radio-container'>
                        <label htmlFor="formRating">1</label>
                        <input type="radio" value={1} name="rating"/>
                        
                        <label htmlFor="formRating">2</label>
                        <input type="radio" value={2} name="rating"/>
                        
                        <label htmlFor="formRating">3</label>
                        <input type="radio" value={3} name="rating"/>
                        
                        <label htmlFor="formRating">4</label>
                        <input type="radio" value={4} name="rating"/>
                        
                        <label htmlFor="formRating">5</label>
                        <input type="radio" value={5} name="rating"/>
                        
                    </div>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default AddGoal;
