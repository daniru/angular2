import {Component, bootstrap, Output, Input, EventEmitter} from "angular2/angular2";
import {NumberService} from "./numberService";
import {BaseInput} from "./baseInput";
import {MultiplyInput} from "./multiplyInput";
import {DivideInput} from "./divideInput";
import {AddInput} from "./addInput";
import {SubtractInput} from "./subtractInput";

@Component({
    selector: 'app',
    directives:[BaseInput, MultiplyInput, DivideInput, AddInput, SubtractInput],
    template: `
        <div>
            <base-input></base-input>
            <multiply-input></multiply-input>
            <divide-input></divide-input>
            <add-input></add-input>
            <subtract-input></subtract-input>
            <div>{{service.output}}</div>
        </div>
    `
})
class App {
    constructor(
        public service:NumberService
    ){}
}

bootstrap(App, [NumberService]).then(
    success => console.log('app starting...'),
    error => console.log(error)
);