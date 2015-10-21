import {Component, Input, Output, EventEmitter} from "angular2/angular2";

@Component({
	selector: 'event-demo',
	template: `
		<div>
			<input #name type=text" [value]="title" />
			<button (click)="onClick2(name.value)">Click me</button>
			<button on-click="onClick($event)">Click me</button>
			{{name.value}}
		</div>
	`
})
export class EventDemo{
	@Input() title;
	@Output() tick = new EventEmitter();
	
	onClick(event){
		console.log(event);
		
	}
	onClick2(name){
		console.log(name);
		this.tick.next({});
	}
}