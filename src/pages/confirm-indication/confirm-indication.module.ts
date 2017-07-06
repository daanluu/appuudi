import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmIndicationPage } from './confirm-indication';

@NgModule({
  declarations: [
    ConfirmIndicationPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmIndicationPage),
  ],
  exports: [
    ConfirmIndicationPage
  ]
})
export class ConfirmIndicationPageModule {}
