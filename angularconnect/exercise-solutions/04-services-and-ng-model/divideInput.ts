import {Component, FORM_DIRECTIVES} from "angular2/angular2";
import {NumberService} from "./numberService"

@Component({
    selector: 'divide-input',
    directives: [FORM_DIRECTIVES],
    template:`
    <div>
        / <input type="number" [(ng-model)]="service.divide">
    </div>
    `
})
export class DivideInput{

    constructor(
        public service:NumberService
    ){}
}