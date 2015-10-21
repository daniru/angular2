import {CORE_DIRECTIVES, FORM_DIRECTIVES, Directive, Component, Input, bootstrap} from "angular2/angular2";

@Component({
    selector:'switching-component',
    directives:[CORE_DIRECTIVES, FORM_DIRECTIVES],
    template:`
        <input type="number" [(ng-model)]="number">
        <div [ng-switch]="number">
            <template ng-switch-default="0">Zero</template>
            <template [ng-switch-when]="1">One</template>
            <template [ng-switch-when]="2">Two</template>
        </div>
    `
})
class SwitchingComponent{
    number:number = 0;
}

@Component({
    selector: "app",
    directives:[SwitchingComponent],
    template: `
        <div>
            <h2>Switch Me!</h2>
            <switching-component></switching-component>
        </div>
    `
})
class App {
}

bootstrap(App, []).then(
    success => console.log(`app started...`),
    error => console.log(error)
);