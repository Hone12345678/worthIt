import {
ABOUT,
LOGIN,
CONTACT, 
SIGNUP,
PROFILE, 
GIG,
} from './actions'
import { useReducer } from 'react';

export const reducer = (state, action) => {
  switch (action.type) {

    case ABOUT:
      return {
        ...state,
        products: [...action.products],
      };
 
    case LOGIN:
    return {
      ...state,
      categories: [...action.categories],
    };

    case CONTACT:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };
    case SIGNUP:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };
    case PROFILE:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };
    case GIG:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}