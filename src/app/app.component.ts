import { Component,OnInit,OnDestroy } from '@angular/core';
import {appervices} from "./app.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private movieList:any[]=[];
  constructor (private movieServices:appervices){}
  ngOnInit(){
    console.log("ji");
    this.destroyMe();
  }
  destroyMe(){
    this.movieServices.getmovies()
    .subscribe((data) => {
      console.log(data);
      this.movieList=data.results;
    });
 
}
}