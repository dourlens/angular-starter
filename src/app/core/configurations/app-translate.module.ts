import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

const PATH_TRANSLATE_FILES = '/assets/i18n/';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, PATH_TRANSLATE_FILES, '.json');
}

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    TranslateModule,
  ]
})

export class AppTranslateModule {
}
