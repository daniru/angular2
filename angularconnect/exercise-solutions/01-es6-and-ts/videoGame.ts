export class VideoGame{
    constructor(
        public name:string
    ){}

    play(){
        return `Playing... ${this.name}`;
    }
}