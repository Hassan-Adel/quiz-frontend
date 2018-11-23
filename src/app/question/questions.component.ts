import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'//,
    //styleUrls: ['./question.component.scss']
})
export class QuestionsComponent implements OnInit {

    question = {};
    questions ;

    constructor(private api : QuestionService) { }

    ngOnInit(): void { 
        this.api.getQuestions().subscribe(res => {
            this.questions = res;
        });
    }

}
