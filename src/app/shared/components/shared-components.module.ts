import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastComponent} from '@app/shared/components/toast/toast.component';
import {SharedModule} from '@app/shared/utils/shared.module';
import {IconModule} from '@app/shared/components/icon/icon.module';
import {TooltipComponent} from '@app/shared/components/tooltip/tooltip.component';
import {TooltipDirective} from '@app/shared/components/tooltip/tooltip.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IconModule
  ],
  declarations: [
    ToastComponent,
    TooltipDirective,
    TooltipComponent,
  ],
  entryComponents: [
    ToastComponent,
    TooltipComponent,
  ],
  exports: [
    IconModule,
    TooltipDirective
  ]

})
export class SharedComponentsModule {
}
