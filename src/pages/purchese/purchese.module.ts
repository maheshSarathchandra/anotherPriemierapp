import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchesePage } from './purchese';

@NgModule({
  declarations: [
    PurchesePage,
  ],
  imports: [
    IonicPageModule.forChild(PurchesePage),
  ],
})
export class PurchesePageModule {}
