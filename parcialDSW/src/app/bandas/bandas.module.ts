import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandasListComponent } from './bandas-list/bandas-list.component';
import { BandasDetailComponent } from './bandas-detail/bandas-detail.component';



@NgModule({
  declarations: [
    BandasListComponent,
    BandasDetailComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BandasListComponent,
  ]
})
export class BandasModule { }
