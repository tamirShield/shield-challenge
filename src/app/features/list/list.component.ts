import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Trivia} from "../../shared/models";
import {getAllTrivia, selectAllTrivia, TriviaState} from "../../store";
import {Store} from "@ngrx/store";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

    trivia$: Observable<Trivia[]> = this.store.select(selectAllTrivia)

    constructor(private readonly store: Store<TriviaState>) {
    }

    ngOnInit(): void {
        this.store.dispatch(getAllTrivia())
    }


}
