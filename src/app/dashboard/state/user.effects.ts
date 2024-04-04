import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../data-access/user.service";
import * as UserActions from "./user.actions";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) {}

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap((action) => {
        return this.userService.getUsers(action.page).pipe(
          map(res => UserActions.loadUsersSuccess({ res: res })),
          catchError(err => of(UserActions.loadUsersFailure({ error: err })))
        )
      }),
    )
  })

  loadSingleUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadSingleUser),
      mergeMap((action) => {
        return this.userService.getSingleUser(action.id).pipe(
          map(res => UserActions.loadSingleUserSuccess({ res: res })),
          catchError(err => of(UserActions.loadSingleUserFailure({ error: err })))
        )
      }),
    )
  })
}
