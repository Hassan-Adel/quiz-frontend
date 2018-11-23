import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './question/questions.component';
import { QuizComponent } from './quiz/quiz.component';


const routes: Routes = [
         { path: 'home', component: HomeComponent },
         { path: 'question', component: QuestionComponent },
         { path: 'questions', component: QuestionsComponent },
         { path: 'quiz', component: QuizComponent },
         { path: '', redirectTo: 'home', pathMatch: 'full' },//anytime user navigates to root take them to books, use pathMach whenever using redirecting
         { path: '**', redirectTo: 'home', pathMatch: 'full' }// '**' (wild card) when a user navigates to route that isn't defined , ie: 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
