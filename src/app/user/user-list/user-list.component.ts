import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { compare, NgbdSortableHeader, SortEvent } from 'src/app/shared/ngb-table.utils';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  
  userList: User[];
  page: number = 1;
  pageSize: number = 5;

  @ViewChildren(NgbdSortableHeader) sorter: QueryList<NgbdSortableHeader>;

  constructor(private userService: UserService, public utils: UtilsService) { }

  ngOnInit(): void {
    this.userService.getUsersList().subscribe(res => {
      this.userList = res;
    }, (error) => console.log(error));
  }

  onSort({ column, direction }: SortEvent) {
    this.sorter.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    if (direction === '') {
      this.userList = this.userList;
    } else {
      this.userList = [...this.userList].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
  
}
