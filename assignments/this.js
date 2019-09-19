/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding is the principal that the value of "this" defaults to the window or console object
* 2. implicit binding is when a function is called the object before the dot is this
* 3. new binding is when you use a constructor function to make new objects the value of this is what is passed in.
* 4. when you use call or apply this is explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const example1 = {
    str: 'example1',
    sayStr: function(){
        console.log(this.str);
    }
}

example1.sayStr();

// Principle 3

// code example for New Binding
function example2(str) {
    this.str = str;
    this.sayStr = function() {
        console.log(this.str);
    }
}

const exampleObj2 = new example2('example2');
exampleObj2.sayStr();

// Principle 4

// code example for Explicit Binding
function example3() {
    console.log(this.str);
}

let example3Obj = {
    name: 'ex3Str',
    str: 'example3'
}

example3.call(example3Obj);