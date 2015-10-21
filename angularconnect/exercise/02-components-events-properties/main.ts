import {Component, bootstrap} from "angular2/angular2";
import {Computer} from "./computer";
import {Mouse} from "./mouse";

@Component({
	selector: "app",
	directives: [Computer, Mouse],
	template: `
		<computer [brand]="brand" #computer [info]="info"></computer>
		<mouse (handson)="computer.startTimer(); info='aa'; computer.status='a';" (handsoff)="computer.cancelTimer(); info='bb'; computer.status='b';"></mouse>
	`
})
class App{
	brand = "Asus";
	status = "awake";
}

bootstrap(App);