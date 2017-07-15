import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemandSuccessPage } from './demand-success';

@NgModule({
  declarations: [
    DemandSuccessPage,
  ],
  imports: [
    IonicPageModule.forChild(DemandSuccessPage),
  ],
  exports: [
    DemandSuccessPage
  ]
})
export class DemandSuccessPageModule {}
