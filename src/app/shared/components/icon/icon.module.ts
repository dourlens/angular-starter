import {NgModule} from '@angular/core';
import {IconComponent} from './icon.component';
import {CommonModule} from '@angular/common';
import {InlineSVGModule} from 'ng-inline-svg';

@NgModule({
  imports: [
    CommonModule,
    InlineSVGModule.forRoot(),
  ],
  declarations: [IconComponent],
  exports: [
    InlineSVGModule,
    IconComponent,
  ],
})
export class IconModule {
}
