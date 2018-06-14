import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrationPage } from '../pages/Registration/registration';
import { LoginPage } from '../pages/Login/login';
import { ProfilePage } from '../pages/Profile/profile';
import { HttpModule } from '@angular/http';
import { PaymentPage } from '../pages/Payment/payment';
import { AuthService } from '../auth.service';
import { CharityListPage } from '../pages/CharityList/charityList';
import { CharityProfilePage } from '../pages/CharityProfile/charityProfile';

import { StripeJavaScriptPage } from '../pages/stripe-java-script/stripe-java-script';
import { StripeNativePage } from '../pages/stripe-native/stripe-native';
import { Stripe } from '@ionic-native/stripe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrationPage,
    LoginPage,
    ProfilePage,
    PaymentPage,
    CharityProfilePage,
    CharityListPage,
    StripeJavaScriptPage,
    StripeNativePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrationPage,
    LoginPage,
    ProfilePage,
    PaymentPage,
    CharityProfilePage,
    CharityListPage,
    StripeJavaScriptPage,
    StripeNativePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    Stripe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
