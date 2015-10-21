import { Component, Optional } from "angular2/angular2";
import {FoodService, DessertService} from "./foodService";

@Component({
	//providers:[FoodService],
	selector: "brother",
	template: `<div>brother</div>`
})
export class Brother{
	//@Optional() for options service, @Host() ?
	constructor(foodService:FoodService, @Optional() dessertService:DessertService) // better with TS
	{
		console.log(foodService);
		console.log(dessertService);	
	}
};