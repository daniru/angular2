import {Component, bootstrap} from "angular2/angular2";
import {StarwarsTable} from "./starwarsTable"

@Component({
	selector: "app",
	directives: [StarwarsTable],
	template: `
		<starwars-table></starwars-table>
	`
})
class App{}

bootstrap(App);