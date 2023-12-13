import { FILTERVALUE } from './types';

const intitialStateFilter = {
  filter: '',
};
export const filterReducer = (state = intitialStateFilter, action) => {
  switch (action.type) {
    case FILTERVALUE: {
      return { ...state, filter: action.payload };
    }
    default:
      return state;
  }
};
