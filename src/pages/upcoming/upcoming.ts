import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';

import {SbookProvider} from "../../providers/sbook/sbook";
import {LoginPage} from "../login/login";

/**
 * Generated class for the UpcomingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html',
})
export class UpcomingPage {

 // rootPage: any =  LoginPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,public bookProvider : SbookProvider,private app : App) {
  }
  logout(){
    this.app.getRootNav().setRoot(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingPage');
  }
  addBook(value: any){
this.bookProvider.addBook(value).subscribe(data=>{
  console.log(data);
});
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}
