import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class QuestionService {
    /*
    selected question property will hold reference to the question that we clicked on and selected. 
    So back in our app, when I click on a question, it will set the reference and then we create an observable
    that components can then subscribe to and get notified of when a question has been clicked on or selected. 
    */
    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();

    constructor(private http:HttpClient) {}
    
    postQuestion(question){
        this.http.post('https://localhost:44360/api/questions', question).subscribe(res => {
            console.log(res);
        });
    }

    getQuestions(){
        return this.http.get('https://localhost:44360/api/questions');
    }

    /*
    selected question property will hold reference to the question that we clicked on and selected. So back in our app, 
    when I click on a question, it will set the reference and then we create an observable just like we have in our http
     get request or post request that components can then subscribe to and get notified of when a question has been clicked on or selected. 
    */
    selectQuestion(question){
        this.selectedQuestion.next(question);
    }

}