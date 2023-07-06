import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TriviaService} from "../../shared/services";
import {addTrivia, addTriviaSuccess, getAllTrivia, getAllTriviaFailure, getAllTriviaSuccess} from "./actions";
import {catchError, map, of, switchMap} from "rxjs";

@Injectable()
export class TriviaEffects {

    loadTrivia$ = createEffect(() => this.actions$.pipe(
        ofType(getAllTrivia.type),
        switchMap(() => this.triviaService.getTrivia().pipe(
            map(payload => getAllTriviaSuccess({payload})),
            catchError(payload => of(getAllTriviaFailure({payload})))
        )),
    ))

    addTrivia$ = createEffect(() => this.actions$.pipe(
        ofType(addTrivia.type),
        switchMap(({payload},) => this.triviaService.saveTrivia(payload).pipe(
            map(payload => addTriviaSuccess({payload})),
            catchError(payload => of(getAllTriviaFailure({payload})))
        )),
    ))

    constructor(private actions$: Actions, private triviaService: TriviaService) {}
}
