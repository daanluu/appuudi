import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InviteFriendsPage } from '../invite-friends/invite-friends';

/**
 * Generated class for the OrbitPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-orbit',
  templateUrl: 'orbit.html',
})
export class OrbitPage {
  inviteFriendsPage = InviteFriendsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrbitPage');
  }

}
