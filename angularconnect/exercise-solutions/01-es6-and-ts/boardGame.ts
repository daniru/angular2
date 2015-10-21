export class BoardGame{
    constructor(
        public name:string
    ){}

    play(){
        return `Playing... ${this.name}`;
    }
}