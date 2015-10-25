declare var require;
//require('zone.js');
//require('refect-metadata');
require('firebase')

import {Component, bootstrap, CORE_DIRECTIVES} from "angular2/angular2";
import {FirebaseEventPipe} from "./firebasepipe";
//import {translations} from "./translations";

@Component({
	selector: 'display',
	directives: [CORE_DIRECTIVES],
	//pipes: [FirebaseEventPipe],
	template: `
		<div>
		 	<button [hidden]="isLoggedIn" class="twitter" (click)="authWithTwitter()">Sing In</button>
		</div>
		<div class="message-input">
			<input #messagetext (keyup)="doneTyping($event)" placeholder="Enter a message">
		</div>
		<ul class="messages-list">
			<li *ng-for="#message of messageArray">
				{{message}}
			</li>
		</ul>
	`
})	
export class Display{
	messageArray: Array<string>;
	
	constructor(){
		this.messageArray = []
	}
	
	doneTyping($event){
		if($event.which === 13){
			this.addMessage($event.target.value);
			$event.target.value = null;
		}
	}
	
	addMessage(message: string){
		this.messageArray.push(message);
	}
}