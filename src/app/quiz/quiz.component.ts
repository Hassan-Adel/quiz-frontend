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
        this.api.quizSelected.subscribe(quiz => this.quiz = quiz);
    }

    post(quiz){
        this.api.postQuiz(quiz);
    }

    put(quiz){
        this.api.putQuiz(quiz);
    }
}
