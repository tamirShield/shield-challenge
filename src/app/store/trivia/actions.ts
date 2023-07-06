import {createAction, props} from "@ngrx/store";
import {Trivia} from "../../shared/models";

export const addTrivia = createAction('[Trivia] Add Trivia', props<{payload: Trivia}>());
export const addTriviaSuccess = createAction('[Trivia] Add Trivia Success', props<{payload: Trivia}>());
export const addTriviaFailure = createAction('[Trivia] Add Trivia Failure', props<{payload: Error}>());

export const getAllTrivia = createAction('[Trivia] Get Trivia')
export const getAllTriviaSuccess = createAction('[Trivia] Get Trivia Success', props<{payload: Trivia[]}>());
export const getAllTriviaFailure = createAction('[Trivia] Get Trivia Failure', props<{payload: Error}>());
