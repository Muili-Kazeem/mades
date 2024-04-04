import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as UserActions from "./user.actions";
import { tap } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()
export class SpinnerEffects {

  constructor(
    private actions$: Actions,
    private spinner: NgxSpinnerService,
  ) {}

  spinnerOn$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          UserActions.loadUsers,
          UserActions.loadSingleUser,
        ),
        tap(() => this.spinner.show())
      ),
    { dispatch: false }
  )

  spinnerOff$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          UserActions.loadUsersSuccess,
          UserActions.loadUsersFailure,
          UserActions.loadSingleUserSuccess,
          UserActions.loadSingleUserFailure
        ),
        tap(() => this.spinner.hide())
      ),
    { dispatch: false }
  )
}
