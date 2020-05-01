import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';

import {AppComponent} from './app.component';
import {HomeComponent} from './modules/home/home.component';
import {AppTranslateModule} from './core/configurations/app-translate.module';
import {IconComponent} from './shared/components/icon/icon.component';
import {IconModule} from './shared/components/icon/icon.module';

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
    IconModule,
  ],
  exports: [
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
