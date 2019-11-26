import { Component } from '@angular/core';
import {App, Events,NavController} from 'ionic-angular';
import {BookProvider} from "../../providers/book/book";
import {CommentPage} from "../comment/comment";
import {BookdetailPage} from "../bookdetail/bookdetail";
import {PurchesePage} from "../purchese/purchese";
import {RatePage} from "../rate/rate";
import {CartPage} from "../cart/cart";
import {LoginPage} from "../login/login";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bookList : Array<any>;
  bookComment :Array<any>;
  bookRate :Array<any>;
  constructor(public navCtrl: NavController,public book : BookProvider,public events: Events,private app : App) {



  }


  logout(){
   // this.book.logout();
    console.log("a");
    this.app.getRootNav().setRoot(LoginPage);
  }
  ionViewWillEnter(){
    this.book.getBookList().subscribe(data =>{
      this.bookList = data;
    });


    this.book.getComment().subscribe(data=>{
      this.bookComment =data;
    });

    this.book.getRate().subscribe(data=>{
      this.bookRate = data;
    });
  }
  removeComment(num){ //button ekta samana nama meka athule wada krnwa num kina eka ekta anuwa initialise wenwa
    console.log(num); //rint wenwa
    this.book. remoCommen(num).subscribe(data=>{ //remove krna id eka num widiyta ynwa,be response ekak dena hinda subscribe wenna ona.nttm wada krn na
     console.log(data);
   });


    this.navCtrl.setRoot(this.navCtrl.getActive().component);


  }


  ionViewDidLoad(){
    console.log('niooijiojo');
  }

  addFavorite(name){
this.book.addFavoritebook(name).subscribe(data=>{
  console.log(data);
});
console.log("jl;kl");
}

  openView(id){
    this.navCtrl.push(BookdetailPage,{id:id});
  }


  addComment(id:any){
    this.navCtrl.push(CommentPage,{id:id});
    console.log(id);
  }

  purchese(){
    this.navCtrl.push(PurchesePage);
  }

  viewRatePage(id){
    this.navCtrl.push(BookdetailPage,{id:id});
    console.log(id);
  }
  showPurcheses(){
    this.navCtrl.push(CartPage);
  }

  rating(id: any){
    this.navCtrl.push(RatePage,{id:id});
  }

}
