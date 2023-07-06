import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutes} from "./shared/enum";

const routes: Routes = [
  {
    path: AppRoutes.LIST,
    loadChildren: () => import('./features/list/list.module').then(m => m.ListModule)
  },
  {
    path: AppRoutes.FORM,
    loadChildren: () => import('./features/trivia-form/trivia-form.module').then(m => m.TriviaFormModule)
  },
  {
    path: '**',
    redirectTo: AppRoutes.LIST
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
