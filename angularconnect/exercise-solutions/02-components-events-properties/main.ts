import {Component, bootstrap, Output, Input, EventEmitter} from "angular2/angular2";
import {Computer} from "./computer";
import {Mouse} from "./mouse";

@Component({
    selector: 'app',
    directives: [Computer, Mouse],
    template: `
        <div>
            <computer
                #computer
                [brand]="'Dell XPS 3110g Supreme'"
                >
            </computer>

            <mouse
                #mouse
                (hand-off)="computer.startTimer()"
                (hand-on)="computer.cancelTimer()"
            ></mouse>
        </div>
    `
})
class App {
}

bootstrap(App).then(
    success => console.log('app starting...'),
    error => console.log(error)
);