import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
//import {Response} from "@angular/http";
/*
  Generated class for the BookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BookProvider Provider');
  }
  url = 'http://localhost//api';
  getBookList(): Observable<any> {
    return this.http.get(`${this.url}/books`)
      .map((response:Response) => {
        return response;
      });
  }

  getBookDetail(id :any):Observable<any>{
    return this.http.get(`${this.url}/books/`+id)
      .pipe(tap(res=>{
        res
      }));
  }


  getFavoriteList(): Observable<any> {
    return this.http.get(`${this.url}/favotites`)
      .map((response:Response) => {
        return response;
      });
  }




  addFavoritebook(name : any):Observable<any>{
    let insert = {
      bookName:name,
      bookPrice:"koktopkpotpo",
      picture:"kgptorjkgpotk",
      auther:"huighituhgoir",
      translator:"kokopkl"
    };
      return this.http.post(`${this.url}/favotites`,insert)
        .pipe(tap(data=>{
          return data;
        }));
    }




  addComment(value: any,id: any):Observable<any>{
    let insert = {
      comment:value,
      book:id
    };
    return this.http.post(`${this.url}/comments`,insert,{responseType:"text"})
      .pipe(tap(response=>{
        return response;
      }))
  }

  getComment():Observable<any>{
    return this.http.get(`${this.url}/comments`)
      .map((response:Response)=>{
        return response;
        }
      );
  }




























  removeOneBook(id :any):Observable<any>{
    return this.http.delete(`${this.url}/favotites/`+id)
      .pipe(tap(response=>{
        return response ;
      }));
  }

  remoCommen(num :any):Observable<any>{
    return this.http.delete(`${this.url}/comments/`+num)
      .pipe(tap(response=>{
        return response;
      }))
  }


  addUsers(value: any):Observable<any>{
    return this.http.post(`${this.url}/users`,value)
      .pipe(tap(response=>{
        return response;
      }))
  }

  getUserByUsername(value :any):Observable<any>{
    let u = value.username;
    let p = value.password;
    return this.http.get(`${this.url}/users/`+u+`/`+p)
      .pipe(tap(res=>{
        return res;
      }));
  }

  addPurchases(value: any):Observable<any>{
    return this.http.post(`${this.url}/purchases`,value)
      .pipe(tap(response=>{
        return response;
      }))
  }

  getPurchaseList(): Observable<any> {
    return this.http.get(`${this.url}/purchases`)
      .map((response:Response) => {
        return response;
      });
  }

  addRate(value: any,id: any):Observable<any>{
    let insert = {
      quantity:value,
      newData:id
    };
    return this.http.post(`${this.url}/rating`,insert,{responseType:"text"})
      .pipe(tap(response=>{
        return response;
      }))
  }

  getRate():Observable<any>{
    return this.http.get(`${this.url}/rating`)
      .map((response:Response)=>{
          return response;
        }
      );
  }


}















