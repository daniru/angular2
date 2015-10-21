import {Component, FORM_DIRECTIVES} from "angular2/angular2";
import {NumberService} from "./numberService"

@Component({
    selector: 'multiply-input',
    directives: [FORM_DIRECTIVES],
    template:`
    <div>
        * <input type="number" [(ng-model)]="service.multiply">
    </div>
    `
})
export class MultiplyInput{

    constructor(
        public service:NumberService
    ){}
}