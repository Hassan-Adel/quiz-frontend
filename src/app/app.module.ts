import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Services
import { QuestionService } from './question/question.service'
import { QuizService } from './quiz/quiz.service'
import { AccountService } from './account/account.service'
//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './question/questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizesComponent } from './quiz/quizes.component';
import { RegisterComponent } from './account/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    QuestionComponent,
    QuestionsComponent,
    QuizComponent,
    QuizesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [QuestionService, QuizService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
