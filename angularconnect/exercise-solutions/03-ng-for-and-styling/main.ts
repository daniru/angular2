import {Component, bootstrap, Output, Input, EventEmitter} from "angular2/angular2";
import {PeopleTable} from "./peopleTable";

@Component({
    selector: 'app',
    directives:[PeopleTable],
    template: `
        <div>
            <people-table></people-table>
        </div>
    `
})
class App {
}

bootstrap(App).then(
    success => console.log('app starting...'),
    error => console.log(error)
);