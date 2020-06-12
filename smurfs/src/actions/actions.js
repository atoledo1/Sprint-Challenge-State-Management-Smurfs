import axios from "axios";

export const fetchSmurfs = () => {
  return async (dispatch, getState) => {
    const response = await axios.get("http://localhost:3333/smurfs");
    dispatch({ type: "FETCH_SMURFS", payload: response.data });
  };
};
