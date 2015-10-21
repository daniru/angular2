import {Component, FORM_DIRECTIVES} from "angular2/angular2";
import {NumberService} from "./numberService"

@Component({
    selector: 'subtract-input',
    directives: [FORM_DIRECTIVES],
    template:`
    <div>
        - <input type="number" [(ng-model)]="service.subtract">
    </div>
    `
})
export class SubtractInput{

    constructor(
        public service:NumberService
    ){}
}