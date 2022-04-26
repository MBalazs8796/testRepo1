function A() {
    console.log('You have called A');
}

function B() {
    console.log('You have called B');
}

function C() {
    console.log('You have called C');
}

function CB() {
    C()
    B()
}

function everything(){
    A()
    B()
    CB()
}