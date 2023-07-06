import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import {ListRoutingModule} from "./list-routing.module";
import {TriviaModule} from "../../shared/components/trivia";

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    TriviaModule,
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
