import { Component,ElementRef,EventEmitter,OnInit,Output,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{


  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  OnAdd(form:NgForm) {
    const value=form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }
}
