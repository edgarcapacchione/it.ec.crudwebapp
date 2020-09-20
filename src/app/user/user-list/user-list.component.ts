import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  
  dataSource: User[];
  displayedColumns: string[] = ['id', 'name', 'surname', 'email'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsersList().subscribe(res => {
      this.dataSource = res;
    }, (error) => console.log(error));
  }

}
