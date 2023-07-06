import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TriviaState, triviaStateFeatureKey} from "./reducers";

export const selectTriviaState = createFeatureSelector<TriviaState>(triviaStateFeatureKey);

export const selectTriviaIsLoading = createSelector(
    selectTriviaState,
    (state: TriviaState) => state.isLoading
);

export const selectTriviaErrors = createSelector(
    selectTriviaState,
    (state: TriviaState) => state.errors
);

export const selectAllTrivia = createSelector(
    selectTriviaState,
    (state: TriviaState) => state.trivia
);


