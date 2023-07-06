import {Trivia} from "../../shared/models";
import {createReducer, on} from "@ngrx/store";
import {
  addTrivia,
  addTriviaFailure,
  addTriviaSuccess,
  getAllTrivia,
  getAllTriviaFailure,
  getAllTriviaSuccess
} from "./actions";

export const triviaStateFeatureKey = 'triviaState';

export interface TriviaState {
    trivia: Trivia[];
    isLoading: boolean;
    errors: Error[];
}

const initialTriviaState: TriviaState = {
    trivia: [],
    isLoading: false,
    errors: []

}

export const triviaReducer = createReducer(
    initialTriviaState,
    on(addTrivia, getAllTrivia, state => ({...state, isLoading: true})),
    on(addTriviaFailure, getAllTriviaFailure, (state, {payload}) => ({
        ...state,
        isLoading: false,
        errors: [...state.errors, payload]
    })),
    on(addTriviaSuccess, (state, {payload}) => ({
        ...state,
        isLoading: false,
        trivia: [...state.trivia, payload]
    })),
    on(getAllTriviaSuccess, (state, {payload}) => ({
            ...state,
            isLoading: false,
            trivia: payload
        }),
    )
);
