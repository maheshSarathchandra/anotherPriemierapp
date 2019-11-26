import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {ChoocesPage} from "../chooces/chooces";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }
  login(value: any){
    this.navCtrl.push(ChoocesPage,{value:value});

  }

  ionViewWillEnter(){
   // this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }




}
