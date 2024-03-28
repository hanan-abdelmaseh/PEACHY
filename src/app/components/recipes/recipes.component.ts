import { Component, OnInit } from '@angular/core';
import { receipe } from 'src/app/interface/receipe';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent  implements OnInit{
  receipes:receipe[]=[] ;
  constructor( private _HomeService:HomeService){

  }
  
  ngOnInit(): void {
   this.getAllReceipes();
  }
  getAllReceipes(){
    this._HomeService.getReceipes().subscribe((res :any)=>{
  this.receipes = res.meals
  ;

  console.log(this.receipes
    )
    });
  }

}
