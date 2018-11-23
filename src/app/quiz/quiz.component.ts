import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit {

    quiz = {};

    constructor(private api : QuizService) { }

    ngOnInit(): void { 
        
    }

    /*post(quiz){
        this.api.postquiz(quiz);
    }

    put(quiz){
        this.api.putquiz(quiz);
    }*/
}
