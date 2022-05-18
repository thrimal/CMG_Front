import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  userName: string = '';
  password: string = '';
  constructor(private userService: UserService, private router:Router) {
  }

  ngOnInit(): void {
  }

  getUserByUserNameAndPassword() {
    if((this.userName && this.password) != ""){
      this.userService.getUser(this.userName,this.password)
        .subscribe(response => {
          if(response != null){
            if(response.userName==this.userName && response.password== this.password){
              console.log(response);
              this.userService.userType=response.userType;
              console.log(this.userService.userType);
              this.router.navigate(['/user']);
            }else{
              alert("User not found...Please register first...");
            }
          }else{
            alert("User not found...Please register first...");
          }
        })
    }else{
      alert("Empty fields...");
    }
    this.router.navigate(['/login']);
  }

}
