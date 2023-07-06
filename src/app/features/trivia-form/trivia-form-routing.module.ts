import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppRoutes} from "../../shared/enum";
import {TriviaFormComponent} from "./trivia-form.component";


const routes: Routes = [
  {
    path: AppRoutes.ROOT,
    component: TriviaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TriviaFormRoutingModule {
}
