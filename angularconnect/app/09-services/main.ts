import {provide, Component, bootstrap} from "angular2/angular2";	
import {FoodService, DessertService} from "./foodService"
import {Brother} from "./brother" // 2
import {Sister} from "./sister" // 2

@Component({
	selector: 'app',
	directives: [Brother, Sister], //2
	template: `
	<div>
		Helo world
		<broter></brother>
		<sister></sister>
	</div>
	`
})
class App{
	//constructor(@Inject(FoodService) foodService) ## we need to include Inject in "angular2/angular2"
	constructor(foodService:FoodService, dessertService:DessertService) // better with TS
	{
		console.log(foodService);	
		console.log(dessertService);	
	}
}

//bootstrap(App, [FoodService]);
bootstrap(App, [FoodService, DessertService]);
//bootstrap(App, [provide(FoodService, { useValue: { fruit: "banana"} })]);
//bootstrap(App, [provide(FoodService, { useFactory: function() {return { fruit: "pear"} }})]);

// service in the parent, the childs share same instances.