import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';

import {AppComponent} from './app.component';
import {HomeComponent} from './modules/home/home.component';
import {AppTranslateModule} from './core/configurations/app-translate.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AppTranslateModule,
  ],
  exports: [
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
