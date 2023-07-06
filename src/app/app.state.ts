import {TriviaState, triviaStateFeatureKey} from "./store";

export interface AppState {
    [triviaStateFeatureKey]: TriviaState;
}
