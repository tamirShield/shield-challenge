import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppRoutes} from "../../shared/enum";
import {ListComponent} from "./list.component";

const routes: Routes = [
  {
    path: AppRoutes.ROOT,
    component: ListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ListRoutingModule {
}
