import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoosePaymentPage } from './choose-payment';

@NgModule({
  declarations: [
    ChoosePaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(ChoosePaymentPage),
  ],
  exports: [
    ChoosePaymentPage
  ]
})
export class ChoosePaymentPageModule {}
