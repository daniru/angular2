import {Component, Input} from "angular2/angular2"

@Component({
	selector: "computer",
	template: `
		<div>
			I am {{brand}} computer 
			<span [hidden]="awake" style='color:#aaa'>{{message}}</span>
			<span>{{status}}</span>
			<span>{{info}}</span>
		</div>
		 
		`
})
export class Computer{
	@Input() brand = "XX";
	@Input() status;
	@Input() info;
	message: string = "";
	awake: boolean = true;
	timer;
	
	startTimer(){
		this.message = "Getting Sleepy...";
		this.awake = false;
		this.timer = setTimeout(() => {
			this.message = "I am sleeping";
		}, 3000);
	}
	
	cancelTimer(){
		if(this.timer){
			this.awake = true;
			clearTimeout(this.timer);
		}
	}
	
	onChanges(changes){
		if(changes.info){
			this.info = "<b>" + this.info + "</b>"
		}
		
	}
}