import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/tree',
    pathMatch: 'full'
  },
  {
    path: 'tree',
    loadChildren: () => import('./ridge-tree/ridge-tree.module').then((item) => item.RidgeTreeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
