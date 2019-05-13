import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

    constructor(
        private authService: AuthService,
        public userService: UserService
    ) { }

    login() {
        this.authService.login();
        this.userService.user.name = 'Hi';
    }

    logout() {
        this.authService.logout();
    }

    ngOnInit() {
    }

}
