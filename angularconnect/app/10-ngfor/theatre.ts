import {Component, CORE_DIRECTIVES} from "angular2/angular2";
import {Movie} from "./movie"

@Component({
	selector: "theatre",
	directives: [CORE_DIRECTIVES],
	styles: [`
		.list { list-style: none; padding: 0; }
		.list li { padding: 4px; font-size: 20px;}
		.doc { background-color: #ccc; }
		.marty {} // styles only work in that component
	`],
	// we can use [ng-style] as well
	template: `
		<div>
			<ul class="list">
				<li *ng-for="#member of movie.cast" [ng-class]="getClass(member)" [style.color]="getColor(member)">
				{{member}}
				</li>
			</ul>
		</div>
	`
})
export class Theatre{
	constructor(public movie:Movie){}
	
	getClass(member){
		if(member === "Doc") return 'doc';
	}
	
	getColor(member){
		if(member === "Actor 1") return 'red';
	}
}