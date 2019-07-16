import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

    private _registerUrl = 'http://localhost:8080/api/register';
    private _loginUrl =   'http://localhost:8080/api/login';
    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

    registerUser(user) {
        return this.http.post(this._registerUrl, user);
    }

    loginUser(user) {
        return this.http.post(this._loginUrl, user);
    }

    loggedIn() {
        return !!localStorage.getItem('token');
    }

    getToken() {
        return localStorage.getItem('token');
    }

    logOut() {
        localStorage.removeItem('token');
        this.router.navigate(['/login'], {relativeTo: this.route});
    }
}
