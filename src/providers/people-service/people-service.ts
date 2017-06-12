import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PeopleServiceProvider {
  public urlCat : string ="http://mygigwall.com/rest-api/server?cmd=category";
  constructor(public http: Http) {
    console.log('Hello PeopleServiceProvider Provider');
  }

   showData(a:string) {
          return a;
      }
    getCategory():Array<any>
      {
       return   this.http.get(this.urlCat).map(res =>   res.json()) .subscribe(data => {
                                          return data;
                                       });
      }
}
