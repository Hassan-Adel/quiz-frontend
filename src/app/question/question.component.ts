import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
    selector: 'question',
    templateUrl: './question.component.html'//,
    //styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

    question = {};

    constructor(private api : QuestionService) { }

    ngOnInit(): void { 
        this.api.questionSelected.subscribe(question => this.question = question);
    }

    post(question){
        this.api.postQuestion(question);
    }

    put(question){
        this.api.putQuestion(question);
    }
}
