import {Component, FORM_DIRECTIVES, Validators, CORE_DIRECTIVES, ControlGroup, Control} from "angular2/angular2";	

@Component({
	selector: 'simple-form',
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
	template: `
	<div>
		<form #form [ng-form-model]="movie" (ng-submit)="onSubmit()">
			<input type="text" ng-control="name">
			<input type="checkbox" ng-control="one">
			<input type="color" ng-control="two">
			<input type="text" ng-control="three">
			<input type="text" ng-control="four">
			<input type="submit" value="Submit">
			<select ng-control="select" [(ng-model)]="info">
				<option *ng-for="#o of selectOptions">{{o}}</option>
			</select>
		</form>
		{{movie.valid | json }}
		<h1 [style.background-color]="'red'" *ng-if="!movie.valid">WARNING</h1>
		{{movie.value | json }}
		{{info}}
		<div [ng-switch]="info">
			<template ng-switch-when="fire">Burn</template>
			<template ng-switch-when="water">water</template>
			<template ng-switch-default>----------------</template>
		</div>
	</div>
	`
})
export class SimpleForm{
	selectOptions = ["a", "b", "fire", "water"];
	
	movie = new ControlGroup({
		name: new Control("a"),
		one: new Control(true),
		two: new Control("#ff0000"),
		three: new Control("", Validators.required),
		four: new Control("", Validators.minLength(3)),
		select: new Control(this.selectOptions[1])
	});
	// threre is an object call FormBuilder (investigate).
	
	onSubmit(){
		console.log "a"
		console.log(this.movie.value);
		// we can add more controls dinamically
		this.movie.addControl()
	}
	// constructor(){
	// 	setInterval(() => this.name = "Stop!!!", 1000)
	// }
}
