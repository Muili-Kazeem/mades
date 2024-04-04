import { Component, OnInit } from '@angular/core';
import { IUser } from '../../model/user';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { getRoutedUser, getRoutedUserError, IState } from '../../state/user.reducer';
import { Store } from '@ngrx/store';
import * as UserActions from "./../../state/user.actions";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user$!: Observable<IUser>;
  public userError$!: Observable<string>;
  public userId!: number;

  constructor(
    private route: ActivatedRoute,
    private store: Store<IState>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.userId = +params.get("id")!;
        this.store.dispatch(UserActions.loadSingleUser({ id: this.userId }));
      }
    )

    this.user$ = this.store.select(getRoutedUser);
    this.userError$ = this.store.select(getRoutedUserError);
  }

  back() {
    this.router.navigate(["/dashboard"]);
  }
}
