export class NumberService{
    base:number = 0;
    multiply:number = 1;
    divide:number = 1;
    add:number = 0;
    subtract:number = 0;

    get output(){
        return this.base
        * this.multiply
        / this.divide
        + this.add
        - this.subtract;
    }
}