import axios from "axios";

const API_URL = "https://secret-wave-37282.herokuapp.com/api/v1/standups";

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

export const deleteGoal = async (id) => {
    try {
        const response = axios.delete(`${API_URL}/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}