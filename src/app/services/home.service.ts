import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService implements OnInit {

  constructor(private _HttpClient:HttpClient) { }

    apiUrl:string ="https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast";
    apiPostUrl:string="http://upskilling-egypt.com:3001/contact";

  ngOnInit(): void {
   
  }
  getReceipes(){
   return this._HttpClient.get(this.apiUrl);
  }
  login(inputValues: any) {
    return this._HttpClient.post(this.apiPostUrl , inputValues)
  }

}
