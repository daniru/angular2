import {Component, Output, EventEmitter} from "angular2/angular2"

@Component({
	selector: "mouse",
	template: `
		<div 
			(mouseout)="onMouseOff()"
			(mouseover)="onHandsOn()"> I am a mouse</div>`
})
export class Mouse{
	@Output() handson: EventEmitter = new EventEmitter();
	@Output() handsoff: EventEmitter = new EventEmitter();
	
	onHandsOn(){
		this.handson.next({});
	}
	
	onMouseOff(){
		this.handsoff.next({});	
	}
	
}