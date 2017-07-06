import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfimSmsPage } from './confim-sms';

@NgModule({
  declarations: [
    ConfimSmsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfimSmsPage),
  ],
  exports: [
    ConfimSmsPage
  ]
})
export class ConfimSmsPageModule {}
