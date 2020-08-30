import { Actions, ActionTypes } from './actions';
import { User } from '../models/User';

export type State = {
  userData: User | undefined;
  _persist: any;
};

export const defaultState: State = {
  userData: undefined,
  _persist: undefined,
};

export const rootReducer = (state: State = defaultState, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.LOAD_USER: {
      return {
        ...state,
        userData: action.payload,
      };
    }

    case ActionTypes.LOGOUT: {
      return {
        ...state,
        userData: undefined,
      };
    }
  }

  return state;
};
