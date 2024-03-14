// actions.js
import axios from 'axios';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDomestics = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    try {
      const response = await axios.get('https://cit-backend-2hic.onrender.com/getAllDomestics');
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
      console.log('Fetched data:', response.data);
    } catch (error) {
      dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
    }
  };
};
export const fetchNileCruises = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    try {
      const response = await axios.get('https://cit-backend-2hic.onrender.com/getAllNileCruise');
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
      console.log('Fetched data:', response.data);
    } catch (error) {
      dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
    }
  };
};

export const fetchPrograms = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    try {
      const response = await axios.get('https://cit-backend-2hic.onrender.com/getAllProgram');
      dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
      console.log('Fetched data:', response.data);
    } catch (error) {
      dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
    }
  };
};
