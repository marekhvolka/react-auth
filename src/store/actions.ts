import { User } from '../models/User';

export enum ActionTypes {
  LOAD_USER = 'LOAD_USER',
  LOGOUT = 'LOGOUT',
}

export class LoadUserAction {
  type: typeof ActionTypes.LOAD_USER = ActionTypes.LOAD_USER;

  payload: User;

  constructor(userData: User) {
    this.payload = userData;
  }
}

export class LogoutUserAction {
  type: typeof ActionTypes.LOGOUT = ActionTypes.LOGOUT;
}

export type Actions = LoadUserAction | LogoutUserAction;
