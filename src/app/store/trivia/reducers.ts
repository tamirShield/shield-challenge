import {Trivia} from "../../shared/models";
import {createReducer, on} from "@ngrx/store";
import {
  ADD_TRIVIA,
  ADD_TRIVIA_FAILURE,
  ADD_TRIVIA_SUCCESS,
  GET_ALL_TRIVIA,
  GET_ALL_TRIVIA_FAILURE,
  GET_ALL_TRIVIA_SUCCESS
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
  on(ADD_TRIVIA, GET_ALL_TRIVIA, state => ({...state, isLoading: true})),
  on(ADD_TRIVIA_FAILURE, GET_ALL_TRIVIA_FAILURE, (state, {payload}) => ({
    ...state,
    isLoading: false,
    errors: [...state.errors, payload]
  })),
  on(ADD_TRIVIA_SUCCESS, (state, {payload}) => ({
    ...state,
    isLoading: false,
    trivia: [...state.trivia, payload]
  })),
  on(GET_ALL_TRIVIA_SUCCESS, (state, {payload}) => ({
      ...state,
      isLoading: false,
      trivia: payload
    }),
  )
);
