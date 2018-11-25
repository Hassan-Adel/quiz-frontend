import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class AuthenticationService {

    constructor(private http:HttpClient) {}
    
    register(credentials){
        this.http.post<any>('https://localhost:44360/api/account', credentials).subscribe(res => {
            localStorage.setItem('token', res);
            console.log(res);
        });
    }
}