import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrbitPage } from './orbit';

@NgModule({
  declarations: [
    OrbitPage,
  ],
  imports: [
    IonicPageModule.forChild(OrbitPage),
  ],
  exports: [
    OrbitPage
  ]
})
export class OrbitPageModule {}
