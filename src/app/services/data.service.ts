import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
//import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:Http) { 
    console.log("Data Service is connected...")
  }
  getPosts(){
   
   return this.http.get('http://jsonplaceholder.typicode.com/posts')
    .pipe(map(res => res.json()));
  }
}
