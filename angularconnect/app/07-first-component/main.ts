import {Component, bootstrap} from "angular2/angular2";
import {FirstComponent} from "./firstComponent";
import {SecondComponent} from "./secondComponent";

@Component({
	selector: 'app',
	directives: [FirstComponent, SecondComponent],
	template: `
		<first-component></first-component>
		<second-component></second-comonent>
	`
})
class App{}

bootstrap(App);