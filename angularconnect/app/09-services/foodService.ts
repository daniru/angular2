import { Injectable } from "angular2/angular2";

@Injectable() // let know the compiler that that component can be inject
export class FoodService{
	fruit = Math.random()
};

@Injectable() // let know the compiler that that component can be inject
export class DessertService{
	dessert = Math.random()
};