class animeDelay extends Function {
    constructor() {
        super("...args", "return this.addDelay(...args)");

        this.staggerDelay = 0

        return this.bind(this);
    }

    addDelay(delay) {
        this.staggerDelay += delay

        let returnVal = this.staggerDelay
        console.log(returnVal)
        return returnVal
    }
}

export default animeDelay