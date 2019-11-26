import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {HistoryPage} from "../history/history";
import {UpcomingPage} from "../upcoming/upcoming";

/**
 * Generated class for the RtsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rts',
  templateUrl: 'rts.html',
})
export class RtsPage {

  tab1Root = UpcomingPage;
  tab2Root = HistoryPage;
  constructor(public navCrtl: NavController) {
  }



}
