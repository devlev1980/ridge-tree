import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RidgeTreeComponent} from './ridge-tree.component';
import {RidgeRoutingModule} from './ridge-routing.module';
import {DropdownTreeviewComponent, TreeviewConfig, TreeviewI18n, TreeviewI18nDefault, TreeviewModule} from 'ngx-treeview';
import {RigdeTreeService} from './rigde-tree.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [RidgeTreeComponent],
  imports: [
    CommonModule,
    RidgeRoutingModule,
    TreeviewModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RidgeTreeComponent],
  providers: [RigdeTreeService]
})
export class RidgeTreeModule {
}
