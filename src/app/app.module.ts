import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';

import {AppComponent} from './app.component';
import {HomeComponent} from './modules/home/home.component';
import {SharedModule} from '@app/shared/utils/shared.module';
import {SharedComponentsModule} from '@app/shared/components/shared-components.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SharedComponentsModule,
  ],
  exports: [
    CommonModule,
    SharedModule,
    SharedComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
