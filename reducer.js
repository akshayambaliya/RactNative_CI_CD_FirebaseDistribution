import {Actions} from './actions';

const initialState = {
  counter: 0,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_REMOVE_VAR:
      return {
        ...state,
        counter: state.counter + 10,
      };

    default:
      return {
        ...state,
      };
  }
};
