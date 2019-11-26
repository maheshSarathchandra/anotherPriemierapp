import { Component } from '@angular/core';
import {Events,NavController, NavParams} from 'ionic-angular';
import {BookProvider} from "../../providers/book/book";

/**
 * Generated class for the RatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html',
})
export class RatePage {

  rating:number = 0;
  rateValue: Array<any>;
   valuer: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public bookRate: BookProvider, public events : Events) {
         this.rateValue = navParams.get('id');
         bookRate.getBookDetail(this.rateValue).subscribe(data=>{
           this.valuer = data.name;
         });

    events.subscribe('star-rating:changed', (starRating) => {
      console.log(starRating);
     this.rating = starRating;
     bookRate.addRate(this.rating,this.rateValue).subscribe(data=>{
       console.log(data);
     });
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RatePage');
  }


}
