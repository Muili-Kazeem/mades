import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon'
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    MatIconModule,
  ],
  exports: [
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    NgxSpinnerModule,
    LoaderComponent,
  ]
})
export class SharedModule { }
