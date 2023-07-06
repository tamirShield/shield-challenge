import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TriviaService} from "../../shared/services";
import {
  ADD_TRIVIA,
  ADD_TRIVIA_SUCCESS,
  GET_ALL_TRIVIA,
  GET_ALL_TRIVIA_FAILURE,
  GET_ALL_TRIVIA_SUCCESS
} from "./actions";
import {catchError, exhaustMap, map, of} from "rxjs";

@Injectable()
export class TriviaEffects {

  loadTrivia$ = createEffect(() => this.actions$.pipe(
    ofType(GET_ALL_TRIVIA.type),
    exhaustMap(() => this.triviaService.getTrivia().pipe(
      map(payload => GET_ALL_TRIVIA_SUCCESS({payload})),
      catchError(payload => of(GET_ALL_TRIVIA_FAILURE({payload})))
    )),
  ))

  addTrivia$ = createEffect(() => this.actions$.pipe(
    ofType(ADD_TRIVIA.type),
    exhaustMap(({payload},) => this.triviaService.saveTrivia(payload).pipe(
      map(payload => ADD_TRIVIA_SUCCESS({payload})),
      catchError(payload => of(GET_ALL_TRIVIA_FAILURE({payload})))
    )),
  ))

  constructor(private actions$: Actions, private triviaService: TriviaService) {
  }
}
