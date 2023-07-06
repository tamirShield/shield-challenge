import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TriviaComponent} from './trivia.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    TriviaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [
    TriviaComponent
  ]
})
export class TriviaModule {
}
