import {Component, FORM_DIRECTIVES} from "angular2/angular2";
import {NumberService} from "./numberService"

@Component({
    selector: 'base-input',
    directives: [FORM_DIRECTIVES],
    template:`
    <div>
        Base: <input type="number" [(ng-model)]="service.base">
    </div>
    `
})
export class BaseInput{

    constructor(
        public service:NumberService
    ){}
}