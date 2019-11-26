import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {BookProvider} from "../../providers/book/book";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: BookProvider,
  public toastController : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(value: any) {
    this.userProvider.addUsers(value).subscribe(data => {
      console.log(data);
      if(data != null){
        this.presentToast();
      }
    });
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'successful',
      duration: 2000
    });
    toast.present();
  }
}
