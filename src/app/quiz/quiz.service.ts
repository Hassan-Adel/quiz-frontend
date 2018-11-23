import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class QuizService {
    /*
    selected quiz property will hold reference to the quiz that we clicked on and selected. 
    So back in our app, when I click on a quiz, it will set the reference and then we create an observable
    that components can then subscribe to and get notified of when a quiz has been clicked on or selected. 
    */
    //private selectedquiz = new Subject<any>();
    //quizSelected = this.selectedquiz.asObservable();

    constructor(private http:HttpClient) {}
    
    getquizs(){
        return this.http.get('https://localhost:44360/api/quizs');
    }

    postquiz(quiz){
        this.http.post('https://localhost:44360/api/quizs', quiz).subscribe(res => {
            console.log(res);
        });
    }

    putquiz(quiz){
        this.http.put(`https://localhost:44360/api/quizs/${quiz.id}`, quiz).subscribe(res => {
            console.log(res);
        });
    }

    
    /*
    selected quiz property will hold reference to the quiz that we clicked on and selected. So back in our app, 
    when I click on a quiz, it will set the reference and then we create an observable just like we have in our http
     get request or post request that components can then subscribe to and get notified of when a quiz has been clicked on or selected. 
    */
    selectquiz(quiz){
        this.selectedquiz.next(quiz);
    }

}