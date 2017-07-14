import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ConfimSmsPage } from '../pages/confim-sms/confim-sms';
import { ConfirmIndicationPage } from '../pages/confirm-indication/confirm-indication';
import { MenuPage } from '../pages/menu/menu';
import { OrbitPage } from '../pages/orbit/orbit';
import { InviteFriendsPage } from '../pages/invite-friends/invite-friends';
import { TabsPage } from '../pages/tabs/tabs';
import { TabHomePage } from '../pages/tab-home/tab-home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ConfimSmsPage,
    ConfirmIndicationPage,
    MenuPage,
    OrbitPage,
    InviteFriendsPage,
    TabsPage,
    TabHomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
    })
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ConfimSmsPage,
    ConfirmIndicationPage,
    MenuPage,
    OrbitPage,
    InviteFriendsPage,
    TabsPage,
    TabHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
