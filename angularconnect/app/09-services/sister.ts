import { Component } from "angular2/angular2";
import {FoodService, DessertService} from "./foodService";

@Component({
	//providers:[FoodService], // create own instance of the service, overwrites the parent
	providers: [DessertService],
	selector: "sister",
	template: `<div>sister</div>`
})
export class Sister{
	constructor(foodService:FoodService, dessertService: DessertService) // better with TS
	{
		console.log(foodService);	
		console.log(dessertService);	
	}
};