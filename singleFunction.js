function A() {
    console.log('You have called A');
}

function B() {
    console.log('You have called B');
}
console.log("szipp")
console.log("szippp")
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

module.exports = {A,B,C,CB,everything}