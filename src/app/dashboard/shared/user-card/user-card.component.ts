import { Component, Input } from '@angular/core';
import { IUser } from '../../model/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() user!: IUser;

}
