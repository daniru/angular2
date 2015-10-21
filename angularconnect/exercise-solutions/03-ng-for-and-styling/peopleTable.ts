import {Component, NgFor, NgClass} from "angular2/angular2";
import {starwarsPeople} from "./starwarsPeople";
//types are optional, but help describe the data
type Person = {
    name:string,
    gender:string,
    height:string,
    eye_color:string
}
type People = Person[];

@Component({
    selector:'people-table',
    directives:[NgFor, NgClass],
    styles:[`
        .tall{
            background-color: lightpink;
        }

        .medium{
            background-color: lightgreen;
        }

        .short{
            background-color: lightskyblue;
        }
    `],

    template: `
        <table>
            <thead>
                <th>Name</th>
                <th>Gender</th>
                <th>Height</th>
            </thead>
            <tbody>
                <tr
                    *ng-for="#person of people"
                    [ng-class]="getPersonClass(person)"
                    >
                    <td>{{person.name}}</td>
                    <td>{{person.gender}}</td>
                    <td>{{person.height}}</td>
                </tr>
            </tbody>
        </table>
    `
})
export class PeopleTable{
    people:People = starwarsPeople;

    getPersonClass(person:Person){
        if(person.height > 200) return "tall";
        if(person.height < 200 && person.height > 100) return "medium";
        if(person.height < 100) return "short";
    }
}

