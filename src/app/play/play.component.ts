import { Component, OnInit } from '@angular/core';
import { QuizService } from './../quiz/quiz.service';

@Component({
    selector: 'play',
    templateUrl: './play.component.html'
})
export class PlayComponent implements OnInit {

    quizs;

    constructor(private api : QuizService) { }

    ngOnInit(): void { 
        this.api.getAllQuizes().subscribe(res => {
            this.quizs = res;
        });
    }

    // post(quiz){
    //     this.api.postQuiz(quiz);
    // }

    // put(quiz){
    //     this.api.putQuiz(quiz);
    // }
}
