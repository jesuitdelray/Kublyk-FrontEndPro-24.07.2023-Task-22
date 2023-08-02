function createAccumulator() {
    let total = 0

    function accumulator(number) {
        total += number
        return total
    }

    return accumulator
}
