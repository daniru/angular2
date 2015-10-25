import {provide, HostListener, HostBinding,  Directive, Component, bootstrap} from "angular2/angular2";

@Directive({
	selector: '[hi]',
})
class Hi{
	public message;
	
	@HostListener('click') onClick(){
		console.log ("click on the  host", this.message);
	}
	
	@HostBinding('innerHTML') this.mesage = '<div>Aww</div>';
}


@Component({
	selector: 'app',
	directives: [Hi], 
	template: `
	<div hi='hola'>
		Hello
	</div>
	`
})
class App{}

bootstrap(App);