import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { LayoutComponent } from './layout/layout.component';
import { UserCardComponent } from './shared/user-card/user-card.component';
import { SharedModule } from '../shared/shared.module';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { HoverDirective } from './directives/hover.directive';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user.effects';
import { SpinnerEffects } from './state/spinner.effects';


@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    LayoutComponent,
    UserCardComponent,
    PaginationComponent,
    HoverDirective
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    StoreModule.forFeature("user", UserReducer),
    EffectsModule.forFeature([UserEffects, SpinnerEffects])
  ]
})
export class DashboardModule { }
