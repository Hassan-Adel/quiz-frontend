import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'question',
    templateUrl: './question.component.html'//,
    //styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    post(question){
        console.log(question);
    }
}
