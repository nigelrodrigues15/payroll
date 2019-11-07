export const SET_DATABASE = 'SET_DATABASE';
export const setDatabase = (database) => dispatch => {
    dispatch({
        type: SET_DATABASE,
        database
    })
};
