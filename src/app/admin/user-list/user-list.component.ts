import { Component, OnInit } from '@angular/core';
import { User, USER_LIST } from './list/user-list';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor() { }

  ngOnInit(): void {
    this.users = USER_LIST;
  }

}
