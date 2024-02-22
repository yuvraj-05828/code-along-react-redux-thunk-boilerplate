export const FETCH_DATA = "FETCH_DATA";
export const ERROR = "ERROR";
export const fetchUserData = (users) => ({ type: FETCH_DATA, payload: users });
export const showError = (error) => ({ type: ERROR, payload: error });