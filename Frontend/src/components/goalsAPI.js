import axios from "axios";

const API_URL = "http://[::1]:3000/api/v1/standups";
//const API_URL = "https://rails-standups.herokuapp.com/";

export const getAPIData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
}

export const addNewGoal = async (input) => {
    const newGoal = {
        goal: input.goal,
        is_completed: input.is_completed,
        rating: input.rating,
    }
    try {
        await axios.post(API_URL, newGoal);
    } catch (error) {
        console.error(error);
    }
}