import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from './question.service';

@Component({
    selector: 'question',
    templateUrl: './question.component.html'//,
    //styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

    question = {};
    quizId;

    constructor(private api : QuestionService, private route : ActivatedRoute) { }

    ngOnInit(): void { 
        this.quizId = this.route.snapshot.paramMap.get('quizId');
        this.api.questionSelected.subscribe(question => this.question = question);
    }

    post(question){
        question.quizId = this.quizId;
        this.api.postQuestion(question);
    }

    put(question){
        //question.quizId = this.quizId;
        this.api.putQuestion(question);
    }
}
