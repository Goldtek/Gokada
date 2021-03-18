import {
  FETCH_USER, LOG_OUT, 
} from '../actions/action-types';

const initialState = {
  users: [],
  loading: true,
  
};

const recordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        users: action.users,
      };

    case LOG_OUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};


export default recordReducer;
