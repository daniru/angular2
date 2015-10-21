import {Component, bootstrap} from "angular2/angular2";	
import {EventDemo} from './eventdemo'

@Component({
	selector: 'app',
	directives: [EventDemo],
	template: `
	<div>
		<event-demo [title]="movieName" (tick)="onTick()"></event-demo>
	</div>
	`
})
class App{
	movieName = "Back to the future";
	
	onTick(){
		console.log("tock");
	}
}

bootstrap(App);