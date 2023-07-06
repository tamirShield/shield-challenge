import {NgModule} from "@angular/core";
import {TriviaService} from "../../shared/services";
import {StoreModule} from "@ngrx/store";
import {triviaReducer, triviaStateFeatureKey} from "./reducers";
import {EffectsModule} from "@ngrx/effects";
import {TriviaEffects} from "./effects";

@NgModule({
  imports: [
    StoreModule.forFeature(triviaStateFeatureKey, triviaReducer),
    EffectsModule.forFeature([TriviaEffects])
  ],
  providers: [TriviaService],
})
export class TriviaStoreModule {
}
