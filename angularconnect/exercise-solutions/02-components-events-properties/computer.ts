import {Component, Input} from "angular2/angular2";
@Component({
    selector: 'computer',
    template: `
        <div>
            <span>I'm a {{brand}}</span>
            <span [hidden]="awake" style="font-style: italic">
                {{sleepMessage}}
            </span>
        </div>
    `
})
export class Computer {
    @Input() brand:string;
    awake:boolean = true;
    sleepMessage:string = "";

    timer;
    startTimer(){
        this.awake = false;
        this.sleepMessage = "I'm getting sleepy....";
        this.timer = setTimeout(()=> {
                this.sleepMessage = "ZZZZzzzzz......";
            }, 3000
        );
    }

    cancelTimer(){
        this.awake = true;
        if(this.timer) clearTimeout(this.timer);
    }
}

