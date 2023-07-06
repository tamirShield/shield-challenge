import {createAction, props} from "@ngrx/store";
import {Trivia} from "../../shared/models";

export const ADD_TRIVIA = createAction('[Trivia] Add Trivia', props<{payload: Trivia}>());
export const ADD_TRIVIA_SUCCESS = createAction('[Trivia] Add Trivia Success', props<{payload: Trivia}>());
export const ADD_TRIVIA_FAILURE = createAction('[Trivia] Add Trivia Failure', props<{payload: Error}>());

export const GET_ALL_TRIVIA = createAction('[Trivia] Get Trivia')
export const GET_ALL_TRIVIA_SUCCESS = createAction('[Trivia] Get Trivia Success', props<{payload: Trivia[]}>());
export const GET_ALL_TRIVIA_FAILURE = createAction('[Trivia] Get Trivia Failure', props<{payload: Error}>());
