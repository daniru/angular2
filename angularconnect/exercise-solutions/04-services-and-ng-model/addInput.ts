import {Component, FORM_DIRECTIVES} from "angular2/angular2";
import {NumberService} from "./numberService"

@Component({
    selector: 'add-input',
    directives: [FORM_DIRECTIVES],
    template:`
    <div>
        + <input type="number" [(ng-model)]="service.add">
    </div>
    `
})
export class AddInput{

    constructor(
        public service:NumberService
    ){}
}