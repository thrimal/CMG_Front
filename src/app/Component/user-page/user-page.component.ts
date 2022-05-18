import { Component, OnInit } from '@angular/core';
import {UserService} from "../../Service/user.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  userType:string=''

  constructor(private userService: UserService) {
    this.userType=userService.userType;
  }

  ngOnInit(): void {
  }

}
