import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-foodselection',
  templateUrl: 'foodselection.html'
})
export class FoodSelection {

  public recipe;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.recipe= navParams.get('data');
  }
}
