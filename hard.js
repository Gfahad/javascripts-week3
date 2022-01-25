function userInfo(NAME, SSN) {
    //define private object pii
    var pii = {
        name: NAME,
        ssn: SSN
    }
    //define public function to get the name of the private object
    function getName() {
        console.log(pii.name);
    };
    return getName;
}

var test = userInfo("Fahad", "12345876");
test();