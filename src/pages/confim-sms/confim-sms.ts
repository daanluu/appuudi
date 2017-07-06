import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmIndicationPage } from '../confirm-indication/confirm-indication';

/**
 * Generated class for the ConfimSmsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-confim-sms',
  templateUrl: 'confim-sms.html',
})
export class ConfimSmsPage {
  confirmIndicationPage =  ConfirmIndicationPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfimSmsPage');
  }

}
