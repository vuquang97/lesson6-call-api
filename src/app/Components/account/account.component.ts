import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

    constructor(
        private authService: AuthService,
        public userService: UserService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    login() {
        this.authService.login();
        this.userService.user.name = 'Hi';
    }

    logout() {
        this.authService.logout();
    }

    gotoHome() {
        this.router.navigate(['/home', {name:  this.userService.user.name, foo: 'foo'}]); //navigate
    }

    ngOnInit() {
    }

}
