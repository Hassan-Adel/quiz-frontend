import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from './question.service';

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'//,
    //styleUrls: ['./question.component.scss']
})
export class QuestionsComponent implements OnInit {

    question = {};
    questions ;
    
    constructor(private api : QuestionService, private route : ActivatedRoute) { }

    ngOnInit(): void { 
        var quizId = this.route.snapshot.paramMap.get('quizId');
        console.log('Quiz Id : ' + quizId);
        this.api.getQuizQuestions(quizId).subscribe(res => {
            this.questions = res;
        });
    }

}
