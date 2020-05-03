import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastComponent} from '@app/shared/components/toast/toast.component';
import {SharedModule} from '@app/shared/utils/shared.module';
import {IconModule} from '@app/shared/components/icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IconModule
  ],
  declarations: [
    ToastComponent
  ],
  entryComponents: [
    ToastComponent,
  ],
  exports: [
    IconModule,
  ]

})
export class SharedComponentsModule {
}
