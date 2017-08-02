import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FoodSelection} from '../foodselection/foodselection'
import {HomePage} from '../home/home'

import 'rxjs/add/operator/map';
import { Http} from '@angular/http';

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class Recipes {
  public recipes;
  public searchList;


  constructor(public navCtrl: NavController,public http : Http, public navParams: NavParams) {

    this.recipes= navParams.get('data');
    
  }




  getTriples() {

      let triples = [];
      let length = this.recipes.length;
      for (let i = 0; i < length; i += 2) {
          let trio = [];
          trio.push(this.recipes[i]);
          if (i + 1 < length) {
              trio.push(this.recipes[i + 1]);
          }
          triples.push(trio);
      }
      return triples;
  }
  

  pushpg(){
      this.navCtrl.push(FoodSelection);
    }
  pushbackrecipe(){
    this.navCtrl.push(HomePage);
  }

  recipeInfo(recipeData){
    this.navCtrl.push(FoodSelection,{data:recipeData});
  }
}
