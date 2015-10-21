import {provide, Component, bootstrap} from "angular2/angular2";	
import {Movie} from "./movie"
import {Theatre} from "./theatre"

@Component({
	selector: 'app',
	directives: [Theatre], 
	template: `
	<div>
		<theatre></theatre>
	</div>
	`
})
class App{}

bootstrap(App, [Movie]);