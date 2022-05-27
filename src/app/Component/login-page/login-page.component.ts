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
      this.userService.getUser(this.userName)
        .subscribe(response => {
          if(response != null){
            for (const res of response) {
              if(res.userName==this.userName && res.password== this.password){
                console.log(res);
                this.userService.userType=res.userType;
                console.log(this.userService.userType);
                this.router.navigate(['/user']);
              }else{
                alert("User not found...Please register first...");
              }
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
