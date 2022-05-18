import { Component, OnInit } from '@angular/core';
import {UserService} from "../../Service/user.service";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  name: string="";
  email: string="";
  contact: string="";
  userName: string="";
  password: string="";
  userType: string="";
  users:any=[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveCustomer() {
    const data:any = {
      id: "",
      name: this.name,
      email: this.email,
      contact: this.contact,
      userName:this.userName,
      password:this.password,
      userType:this.userType,
      employeeId:"EM001"
    }
    if((this.userType && this.password && this.userName && this.contact && this.email && this.name) != ""){
      this.userService.create(data)
        .subscribe(
          response => {
            console.log(response);
            alert("User Added Successfully...");
          },
          error => {
            console.log(error);
          });
    }else{
      alert("Empty fields...");
    }

  }

  getAllUsers() {
    this.userService.getAll().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.log(error);
      });
  }

  valueChange(event: any) {
    this.userService.userType=event.target.value;
    this.userType=this.userService.userType;
    console.log(this.userService.userType);
  }
}
