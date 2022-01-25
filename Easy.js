function exercise(exercise_name) {
    function print() {
        return "Today's exercise: " + exercise_name;
    }
    return print;
}

var run = exercise('running');

console.log(run()); // prints "Today's exercise: running"

var swim = exercise('swimming');

console.log(swim()); // prints "Today's exercise: swimming"