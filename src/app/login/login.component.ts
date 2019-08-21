import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
class LoginClass {
    username: string;
    password: string;
    errorMsg: string;
}
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginObj: LoginClass;
    constructor(public router: Router) {
        this.loginObj = new LoginClass();
    }

    model = 1;
    loginType = 1;
    ngOnInit() {}

    onLoggedin() {
        this.loginObj.errorMsg = '';
        if (this.loginObj.username === 'user01' && this.loginObj.password === 'password') {
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('loginType', '' + this.loginType);
            console.log(localStorage.getItem('loginType'));
            if (localStorage.getItem('loginType') === '1') {
                this.router.navigate(['dashboard']);
            } else {
                this.router.navigate(['allapplications']);
            }
        } else {
            this.loginObj.errorMsg = 'Invalid username or password.';
        }
    }
    onSubmit(f) {}
}
