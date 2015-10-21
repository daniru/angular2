import {provide, Component, bootstrap} from "angular2/angular2";
import {SimpleForm} from "./simpleForm";

@Component({
	selector: 'app',
	directives: [SimpleForm], 
	template: `
	<div>
		<simple-form></simple-form>
	</div>
	`
})
class App{}

bootstrap(App);