function person(Name, Job, Age) {
    this.Name = Name;
    this.Job = Job;
    this.Age = Age;

    this.exercise = (function () {
        console.log("Running is fun! - said no one ever");
    });

    this.fetchJob = (function () {
        console.log(this.Name + " is a " + this.Job);
    });
}

var test = new person("Haruna", "Engineer", 24);
test.exercise();
test.fetchJob();

function programmer(Person, Languages) {
    this.person = Person;
    this.languages = Languages;
    this.busy = true;

    this.completeTask = (function () {
        this.busy = false;

    });

    this.acceptNewTask = (function () {
        this.busy = true;
    });
}


var testProgrammer = new programmer(test, "English");
testProgrammer.person.fetchJob();
console.log(testProgrammer.languages);