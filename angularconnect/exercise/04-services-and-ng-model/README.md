## Servicing A Calculator

* Create a `NumberService`
* Create 5 components: `baseInput`, `multiplyInput`, `divideInput`, `addInput`, `subtractInput`
* Inject the `NumberService` into each component
* Use `[(ng-model)]` to bind each `input` to a property on the `NumberService`
* Create an `output` on the `NumberService` and display it on the `main` file.
* The `output` should look something like:
```js
    get output(){
        return this.base
        * this.multiply
        / this.divide
        + this.add
        - this.subtract;
    }
```


