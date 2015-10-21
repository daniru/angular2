import {Component, FORM_DIRECTIVES, NgFor, ControlGroup, Control} from "angular2/angular2";

@Component({
    selector: 'person-form',
    directives: [FORM_DIRECTIVES, NgFor],
    styles:[`
        form{
            display:flex;
            flex-direction: column;
            width: 100px;
        }
    `],
    template: `
        <div>
            <form [ng-form-model]="personForm" (ng-submit)="onSubmit()">
                <div>
                    Cookies?<input type="checkbox" ng-control="cookies">
                </div>
                <select ng-control="type">
                    <option *ng-for="#type of types">{{type}}</option>
                </select>
                <input type="color" ng-control="eyeColor">
                <input type="text" ng-control="name">
                <input type="submit" value="Click Me">
            </form>
            <p>Value:</p>
            <pre>{{value}}</pre>
        </div>
    `
})
export class PersonForm{

    types:string[] = ["mage", "warrior", "scuba diver", "cook", "singer"];

    personForm:ControlGroup = new ControlGroup({
        cookies: new Control(true),
        type: new Control(this.types[0]),
        eyeColor: new Control("#daddad"),
        name: new Control("John")
    });

    get value(): string {
        return JSON.stringify(this.personForm.value, null, 2);
    }

    onSubmit(){
        console.log(this.personForm.value);
    }
}