import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

/*
  Generated class for the SbookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SbookProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SbookProvider Provider');
  }

  url1 = 'http://localhost/api';

  addBook(value: any):Observable<any>{
    return this.http.post(`${this.url1}/books`,value)
      .pipe(tap(response=>{
        return response;
      }))
  }














  getBookList(): Observable<any> {
    return this.http.get(`${this.url1}/books`)
      .map((response:Response) => {
        return response;
      });
  }
}




