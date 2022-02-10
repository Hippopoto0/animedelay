# animedelay
Small extension to anime js that allows for changes to delays to move the rest of a timeline

To use, install, run

    npm install animedelay
It can then be imported using ES6 modules.
```js
// import anime js as normal
import  anime  from  "animejs/lib/anime.es"
// import animeDelay
import animeDelay from "animedelay"
```
And used like so:
```js
let tl = anime.timeline({...})
let delay = animeDelay()

tl.add({...}, delay(0))
tl.add({...}, delay(600))

// starts second animation 600ms after the first one starts
// (default duration is 1000ms)
```
Example:
```js
let tl = anime.timeline({ easing:  "easeOutExpo", loop:  true });
let delay = new animeDelay()

tl.add({
	targets:  ".circle",
	translateX:  "20rem",
}, delay(0))

.add({
	targets:  ".square",
	translateX:  "20rem",
}, delay(200))

.add({
	targets:  ".triangle",
	translateX:  "20rem",
}, delay(200))

.add({
	targets:  ".shape",
	translateX:  "0rem",
}, delay(900))
```

![code result](https://s10.gifyu.com/images/no-delay-changes.gif)

Changing delays to as follows:

```js
tl.add({
	targets:  ".circle",
	translateX:  "20rem",
}, delay(0))

.add({
	targets:  ".square",
	translateX:  "20rem",
}, delay(1000))

.add({
	targets:  ".triangle",
	translateX:  "20rem",
}, delay(0))

.add({
	targets:  ".shape",
	translateX:  "0rem",
}, delay(900))
```
Results in these changes:
![code with changes result](https://s10.gifyu.com/images/delay-changes.gif)
