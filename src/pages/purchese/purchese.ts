import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BookProvider} from "../../providers/book/book";

/**
 * Generated class for the PurchesePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-purchese',
  templateUrl: 'purchese.html',
})
export class PurchesePage {

   purches = {purches:''};
  constructor(public navCtrl: NavController, public navParams: NavParams,public purchaseProvider : BookProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchesePage');
  }
     purchase(value : any){
        this.purchaseProvider.addPurchases(value).subscribe(data=>{
          console.log(data);
        });
       this.navCtrl.setRoot(this.navCtrl.getActive().component);
     }
}
