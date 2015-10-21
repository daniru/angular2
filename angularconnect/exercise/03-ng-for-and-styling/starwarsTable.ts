import {Component, CORE_DIRECTIVES} from "angular2/angular2";
import {starwarsPeople} from "./starwarsPeople";

@Component({
	selector: "starwars-table",
	directives: [CORE_DIRECTIVES], 
	styles:[`
		ul{ list-style: none; padding: 0; margin: 0;}
		li { padding: 5px; clear: both; margin: 1px;  border-bottom: 1px solid #eee; }
		li > div { padding: 5px;}
		li div.name { width: 200px; float: left; }
		li div.gender { width: 100px; float: left; }
		li div.height { width: 50px; float: left; text-align: center; }
		.tall { background-color: green; }
		.normal { background-color: orange; }
		.short { background-color: red; }
		.clear { clear: both; }
		.surface { width: 400px; height: 200px; background-color: #eee;}
	`],
	template: `
		<div>
			<div class="surface" (mousemove)="move=$event"></div>
			<ul>
			<li *ng-for="#person of people" >
				<div class="name">{{person.name}}</div>
				<div class="gender">{{person.gender}}</div>
				<div class="height" [ng-class]="getClass(person)"
					[style.width.px]="move?.x + 1"
				>{{person.height}}</div>
				<div class="clear"></div>
			</li>
			</ul>
		</div>
	`
})
export class StarwarsTable{
	people = starwarsPeople;
	move;
	
	getClass(person){
		if(person.height < 100) return "short";
		if(person.height > 200) return "tall";
		return "normal";
	}
}
