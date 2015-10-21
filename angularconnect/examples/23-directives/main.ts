import {HostListener, Directive, Component, Input, bootstrap} from "angular2/angular2";

@Directive({
    selector: '[simple]',
})
class SimpleDirective {
    @Input() simple:string;

    @HostListener('mouseover', ['$event']) onMouseover(event) {
        console.log(`Host components says: ${this.simple} - ${event}` );
    }
}


@Component({
    selector: "app",
    directives: [SimpleDirective],
    template: `
        <div [simple]="message">Hello world</div>
    `
})
class App {
    message:string = "Directives add behaviors through attributes";
}

bootstrap(App, []).then(
    success => console.log(`app started...`),
    error => console.log(error)
);

//more here: https://angular.io/docs/js/latest/api/core/DirectiveMetadata-class.html