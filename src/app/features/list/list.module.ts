import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';
import {ListRoutingModule} from "./list-routing.module";
import {CardModule, TriviaModule} from "../../shared/components";

@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        CommonModule,
        ListRoutingModule,
        TriviaModule,
        CardModule,
    ],
    exports: [
        ListComponent
    ]
})
export class ListModule {
}
