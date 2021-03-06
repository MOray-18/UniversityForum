import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isOpen: false,
};

export const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DROPDOWN:
      return { isOpen: !state.isOpen };

    default:
      return state;
  }
};
