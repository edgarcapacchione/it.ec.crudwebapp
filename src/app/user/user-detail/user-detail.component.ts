import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  idSearched: number;
  userDetail: User;

  constructor(public utils: UtilsService, private userService: UserService) { }

  ngOnInit(): void { }

  searchUser(userId: number): void {
    this.userService.getUserById(userId).subscribe((res: User) => {
      this.userDetail = this.utils.deepCopy(<User>res);
    }, (error) => console.log(error));
  }

}
