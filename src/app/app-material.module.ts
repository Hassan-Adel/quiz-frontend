import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatCardModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule
  ]
})
export class AppMaterialModule { }
