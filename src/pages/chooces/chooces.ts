import { Component } from '@angular/core';
import {App,NavController, NavParams} from 'ionic-angular';
import {RtPage} from "../rt/rt";
import {RtsPage} from "../rts/rts";
import {BookProvider} from "../../providers/book/book";

/**
 * Generated class for the ChoocesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-chooces',
  templateUrl: 'chooces.html',
})
export class ChoocesPage {

  userProfile: Array<any>;
  profie : string;
  hideme: boolean;
  constructor(private app : App,public navCtrl: NavController, public navParams: NavParams, public userProvider: BookProvider) {
    this.userProfile = navParams.get('value');
    this.userProvider.getUserByUsername(this.userProfile).subscribe(userdata=>{
      if (userdata == null){
        this.profie = 'something went wrong';
      }else {
        this.profie = userdata.name;
        this.hideme = true;
      }
      console.log(this.profie);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoocesPage');
  }
  openRtPage(){
    this.app.getRootNav().setRoot(RtPage);
  }

  openRtsPage(): void{
    this.app.getRootNav().setRoot(RtsPage);
  }
}
