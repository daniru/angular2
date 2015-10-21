import {Component, Output, EventEmitter} from "angular2/angular2";
@Component({
    selector:'mouse',
    template:`
        <div
        (mouseover)="onMouseover()"
        (mouseout)="onMouseout()">
            I'm a mouse
        </div>
    `
})
export class Mouse{
    @Output() handOn:EventEmitter = new EventEmitter();
    @Output() handOff:EventEmitter = new EventEmitter();

    onMouseover(){
        this.handOn.next({});
    }

    onMouseout(){
        this.handOff.next({});
    }
}

