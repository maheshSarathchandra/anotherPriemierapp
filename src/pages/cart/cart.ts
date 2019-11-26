import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BookProvider} from "../../providers/book/book";

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  purchase : Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public purchaseProvider : BookProvider) {
  }

  ionViewWillEnter(){
    this.purchaseProvider.getPurchaseList().subscribe(data=>{
      this.purchase = data;
      console.log(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  viewPaypalPage(){
    window.open('https://www.paypal.com/lk/home');
  }

}
