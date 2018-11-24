import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';

@Component({
    selector: 'quizes',
    templateUrl: './quizes.component.html'//,
    //styleUrls: ['./quiz.component.scss']
})
export class QuizesComponent implements OnInit {

    quiz = {};
    quizs ;

    constructor(private api : QuizService) { }

    ngOnInit(): void { 
        this.api.getQuizes().subscribe(res => {
            this.quizs = res;
        });
    }

}
