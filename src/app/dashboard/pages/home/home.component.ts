import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable, tap } from 'rxjs';
import { IUser } from '../../model/user';
import { Store } from '@ngrx/store';
import { getFilteredUsers, getAllUsers, IState, getLoadUsersError, getNumberOfUsersPerPage, getTotalNumberOfUsers } from '../../state/user.reducer';
import * as UserActions from "./../../state/user.actions";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public searchBox = new FormControl();
  public searchWord!: string;
  public pageNumber: number = 1;

  public allUsers$!: Observable<IUser[]>;
  public filteredUsers$!: Observable<IUser[]>;
  public errorMessage$!: Observable<string>;

  public per_page$!: Observable<number>;
  public totalNoOfUsers$!: Observable<number>;

  constructor(
    private store: Store<IState>,
  ) { }

  ngOnInit(): void {
    this.searchBox.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap((val) => {
        this.searchWord = this.searchBox.value;
        this.store.dispatch(UserActions.filterUsers({ filter: this.searchWord }));
      })
    ).subscribe();

    this.store.dispatch(UserActions.loadUsers({ page: this.pageNumber }));

    this.allUsers$ = this.store.select(getAllUsers);
    this.filteredUsers$ = this.store.select(getFilteredUsers);
    this.errorMessage$ = this.store.select(getLoadUsersError);
    this.per_page$ = this.store.select(getNumberOfUsersPerPage);
    this.totalNoOfUsers$ = this.store.select(getTotalNumberOfUsers);
  }

  public pageChange(page: any) {
    this.store.dispatch(UserActions.loadUsers({ page }));
  }

}
