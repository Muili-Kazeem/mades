import { createAction, props } from "@ngrx/store";
import { IEndpointResponse } from "src/app/models/endPointResponse.model";


// Load Users Actions
export const loadUsers = createAction(
  "[User] Load Users",
  props<{ page: number }>()
);
export const loadUsersSuccess = createAction(
  "[User] Load Users Success",
  props<{ res: IEndpointResponse }>()
);
export const loadUsersFailure = createAction(
  "[User] Load Users Fail",
  props<{ error: string }>()
);


// Filter Users Actions
export const filterUsers = createAction(
  "[User] Filter User",
  props<{ filter: string }>()
)

// Load a Single User Actions
export const loadSingleUser = createAction(
  "[User] Load Single User",
  props<{ id: number }>()
);
export const loadSingleUserSuccess = createAction(
  "[User] Load Single User Success",
  props<{ res: IEndpointResponse }>()
);
export const loadSingleUserFailure = createAction(
  "[User] Load Single User Fail",
  props<{ error: string }>()
);
