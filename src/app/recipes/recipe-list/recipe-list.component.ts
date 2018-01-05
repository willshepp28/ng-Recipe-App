import { Component, OnInit } from '@angular/core';


import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://c2.staticflickr.com/6/5826/30852801051_be48d19c9f_b.jpg'), // calls constructor
    new Recipe('A Test Recipe', 'This is simply a test', 'https://c2.staticflickr.com/6/5826/30852801051_be48d19c9f_b.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://c2.staticflickr.com/6/5826/30852801051_be48d19c9f_b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
