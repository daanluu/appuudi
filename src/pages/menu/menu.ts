import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Nav } from 'ionic-angular';
import { OrbitPage } from '../orbit/orbit'
import { InviteFriendsPage } from '../invite-friends/invite-friends';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.pages = [
      { title: 'Home', component: TabsPage, icon: 'person-add' },
      { title: 'Perfil', component: OrbitPage, icon: 'person' },
      { title: 'Loja', component: InviteFriendsPage, icon:'cart' },
      { title: 'Meus pedidos', component: OrbitPage, icon:'list-box' },
      { title: 'Suporte', component: OrbitPage, icon: 'headset' },
      { title: 'Sair', component: OrbitPage, icon: 'exit' }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openMenu() {
    this.menuCtrl.open();
  }

  closeMenu() {
   this.menuCtrl.close();
  }

  toggleMenu() {
   this.menuCtrl.toggle();
  }

}
