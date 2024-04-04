import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { IUser } from "../model/user";
import * as AppState from "../../state/app.state";
import * as UserActions from "./user.actions";

export interface IState extends AppState.IState {
  users: IUserState
}

export interface IUserState  {
  allUsers: IUser[];
  filteredUsers: IUser[];
  totalNumberOfUsers: number;
  numberOfUsersPerPage: number;
  loadUsersError: string;
  routedUser: IUser;
  routedUserError: string;
}

const initialState: IUserState = {
  allUsers: [],
  filteredUsers: [],
  totalNumberOfUsers: 0,
  numberOfUsersPerPage: 0,
  loadUsersError: "",
  routedUser: {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  },
  routedUserError: "",
}

export const UserReducer = createReducer<IUserState>(
  initialState,
  on(UserActions.loadUsersSuccess, (state, action) => {
    return {
      ...state,
      allUsers: action.res.data,
      filteredUsers: action.res.data,
      loadUsersError: '',
      totalNumberOfUsers: action.res.total,
      numberOfUsersPerPage: action.res.per_page,
    }
  }),

  on(UserActions.loadUsersFailure, (state, action) => {
    return {
      ...state,
      allUsers: [],
      filteredUsers: [],
      loadUsersError: action.error,
    }
  }),

  on(UserActions.loadSingleUserSuccess, (state, action) => {
    return {
      ...state,
      routedUser: action.res.data,
      routedUserError: "",
    }
  }),

  on(UserActions.loadSingleUserFailure, (state, action) => {
    return {
      ...state,
      routedUserError: action.error,
    }
  }),

  on(UserActions.filterUsers, (state, action) => {

    let filter = action.filter;
    let result: IUser[];

    if (!filter) {
      result = state.allUsers;
    } else {
      type UserKeys = keyof IUser;
      const searchProperties: UserKeys[] = ["id", "first_name", "last_name"];
      filter = filter.toLowerCase();

      result = state.allUsers.filter(user => {
        for (const property of searchProperties) {
          const value = user[property]?.toString().toLowerCase();
          if (value?.includes(filter)) {
            return true;
          }
        }
        return false;
      })
    }

    return {
      ...state,
      filteredUsers: result,
    }
  })
)

const getUserFeatureState = createFeatureSelector<IUserState>("user");

export const getAllUsers = createSelector(
  getUserFeatureState,
  state => state.allUsers
);

export const getLoadUsersError = createSelector(
  getUserFeatureState,
  state => state.loadUsersError
);

export const getFilteredUsers = createSelector(
  getUserFeatureState,
  state => state.filteredUsers
);

export const getTotalNumberOfUsers = createSelector(
  getUserFeatureState,
  state => state.totalNumberOfUsers
);

export const getNumberOfUsersPerPage = createSelector(
  getUserFeatureState,
  state => state.numberOfUsersPerPage
);

export const getRoutedUser = createSelector(
  getUserFeatureState,
  state => state.routedUser
);

export const getRoutedUserError = createSelector(
  getUserFeatureState,
  state => state.routedUserError
);
