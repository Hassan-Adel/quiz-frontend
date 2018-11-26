import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

    constructor(private http : HttpClient, private router : Router) {}
    
    register(credentials){
        this.http.post<any>('https://localhost:44360/api/account', credentials).subscribe(res => {
            this.authenticate(res);
        });
    }

    login(credentials){
        this.http.post<any>('https://localhost:44360/api/account/login', credentials).subscribe(res => {
            this.authenticate(res);
        });
    }

    authenticate(res){
        localStorage.setItem('token', res);
        this.router.navigate(['/']);
    }
}