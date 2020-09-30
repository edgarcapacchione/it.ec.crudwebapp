import { Component, OnInit } from '@angular/core';
import { Paths } from 'src/app/shared/constants';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public utils: UtilsService) { }

  ngOnInit(): void { }

}
