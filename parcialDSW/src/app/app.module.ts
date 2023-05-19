import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandasService } from './bandas/bandas.service';
import { BandasListComponent } from './bandas/bandas-list/bandas-list.component';
import { BandasDetailComponent } from './bandas/bandas-detail/bandas-detail.component';
import { BandasModule } from './bandas/bandas.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BandasModule,
    HttpClientModule,

  ],
  providers: [BandasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
