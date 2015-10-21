## The Sleeping Computer

* Create a `Computer` component with a `[brand]`
* Create a `Mouse` component
* When you `mouseout` of the `Mouse`, the `Computer` should display a "Getting sleepy" message.
* After 3 seconds, the `Computer` should display a "I'm sleeping" message.
* When you `mouseover` the `Mouse`, the `Computer` should wake up and hide all messages (with `[hidden]`)


## Key Pieces
Mouse: custom `handOn` and `handOff` events when you `mouseover` and `mouseout`
Computer: A template displaying a `message` based on the sleep status
Computer: a `startTimer` and `cancelTimer` method that are trigged by the custom events
