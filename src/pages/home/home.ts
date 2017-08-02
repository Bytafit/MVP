import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {Recipes} from '../recipes/recipes';
import { AlertController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import { Http} from '@angular/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  search:any;
  searchList = [];
  recipes;
  query;
  counter = 0;
  nextData = [];

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController,public alertCtrl: AlertController) {
    


  }
  ionViewWillEnter() {
    this.searchList =[];
  }
  pushenter(){
    if(this.searchList.length == 0){
      this.noIngredients();
    }else if(this.searchList.length < 3){
      this.needMoreIngredients();
    }
    else{
      this.query = "";
      for(var i=0; i < this.searchList.length; i++){
        this.query += " " + this.searchList[i];
      }
      this.downloadRecipes()
      // this.navCtrl.push(Recipes,{data:this.searchList});
    }

  }

  add(){
    if (this.search !== undefined) {
      this.searchList.push(this.search);
      this.search = null;
    }
  }
  
delete(foodvalue){
  this.searchList.splice(this.searchList.indexOf(foodvalue),1)
  console.log(this.searchList.indexOf(foodvalue))
  console.log(foodvalue)
}

  downloadRecipes(){
    this.nextData =[];
    console.log(this.searchList);
    this.http.post('https://xpertaste.herokuapp.com/test',{data:this.query}).map(res => res.json()).subscribe(data => {
      this.recipes = data;
      if(this.recipes.length == 0){
        this.noRecipes();
      }else{

        this.sortRecipe(this.recipes);
        // this.navCtrl.push(Recipes,{data:this.recipes});
      }
    })
  }

  sortRecipe(recipes){


      for(var recipe of recipes){
        this.counter = 0;
        for (var item of recipe.ingredients){
          for (var word of this.searchList){
            // console.log("word "  + word);
            // console.log('%c item ' + item, 'background: #222; color: #bada55');
            if(word == item){
              
              this.counter += 1;
              console.log("match on " + word + " " + item);
              console.log(this.counter);
              if(this.counter == 3){
                this.nextData.push(recipe);
              }
            }

          }
        }
      }
      // for(var word of this.searchList){
      //   for(var recipe of recipes){
      //     this.counter = 0;
      //     for(var item of recipe.ingredients){
      //       if(word == item){
      //         console.log("match on " + word + " " + item);
      //         this.counter += 1;
      //         console.log("counter " + this.counter);
 
              
      //       }else{
      //         // console.log("word "  + word);
      //         // console.log('%c item ' + item, 'background: #222; color: #bada55');
      //       }
      //     }
      //     if(this.counter == 3){
      //           this.nextData.push(recipe);
      //     }
      //   }
      // }
    
      console.log(this.nextData);
      this.navCtrl.push(Recipes,{data:this.nextData});
  }

  noRecipes() {
    let alert = this.alertCtrl.create({
      title: 'No Available Recipes',
      subTitle: 'No recipes were found with the ingredients entered',
      buttons: ['OK']
    });
    alert.present();
  }
  noIngredients(){
     let alert = this.alertCtrl.create({
      title: 'No Ingredients Entered',
      subTitle: 'Please enter some ingredients',
      buttons: ['OK']
    });
    alert.present();
  }
  needMoreIngredients(){
     let alert = this.alertCtrl.create({
      title: 'Not Enough Ingredients Entered',
      subTitle: 'Please enter at least three ingredients',
      buttons: ['OK']
    });
    alert.present();
  }
}
