import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrbitPage } from '../orbit/orbit'
import { TabHomePage } from '../tab-home/tab-home';
import { InviteFriendsPage } from '../invite-friends/invite-friends';
import { DemandSuccessPage } from '../demand-success/demand-success';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any = TabHomePage;
  tab2Root: any = OrbitPage;
  tab3Root: any = InviteFriendsPage;
  tab4Root: any = DemandSuccessPage;
  mySelectedIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
