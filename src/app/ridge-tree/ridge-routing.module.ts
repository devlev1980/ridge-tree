import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RidgeTreeComponent} from './ridge-tree.component';

const routes: Routes = [
  {
    path: '',
    component: RidgeTreeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RidgeRoutingModule {
}
