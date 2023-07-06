import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TriviaFormComponent} from './trivia-form.component';
import {TriviaFormRoutingModule} from "./trivia-form-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {CardModule} from "../../shared/components";


@NgModule({
  declarations: [
    TriviaFormComponent
  ],
    imports: [
        CommonModule,
        TriviaFormRoutingModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        CardModule
    ],
  exports: [
    TriviaFormComponent
  ]
})
export class TriviaFormModule {
}
