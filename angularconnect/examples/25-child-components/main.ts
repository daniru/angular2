import {ViewChild, CORE_DIRECTIVES, FORM_DIRECTIVES, Directive, Component, Input, bootstrap} from "angular2/angular2";

@Component({
    selector:'child',
    template:`
        <div>I'm a simple child</div>
    `
})
class Child{
    message:string = "Whatcha going to do with me?";
}

@Component({
    selector: "app",
    directives:[Child],
    template: `
        <div>
            <child></child>

            <button (click)="onClick()">See the child</button>
        </div>
    `
})
class App {
    @ViewChild(Child) child:Child;

    onClick(){
        console.log(this.child);
    }
}

bootstrap(App, []).then(
    success => console.log(`app started...`),
    error => console.log(error)
);