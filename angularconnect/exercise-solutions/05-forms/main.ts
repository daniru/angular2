import {Component, bootstrap} from "angular2/angular2";
import {PersonForm} from "./personForm"
@Component({
    selector:'app',
    directives:[PersonForm],
    template:`
        <div>
            <person-form></person-form>
        </div>
    `
})
class App{}

bootstrap(App).then(
    success => console.log('app starting...'),
    error => console.log(error)
);