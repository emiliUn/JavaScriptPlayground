// How to compare two arrays of objects
// Official doc : https://nodejs.org/api/assert.html
// https://www.npmjs.com/package/deep-equal
const assert = require('assert');

const actual =   {'age':28, 'name':'Doe', 'place':{'street':'Broadway', 'city':'New York'}};
const expected = {'age':28, 'name':'Doe', 'place':{'street':'Broadway', 'city':'New York'}};

try {
    // Two objects are equals => no error
    assert.deepStrictEqual(actual, expected, 'Oups there is a problem');
    // We modify one object => an error will be raise
    actual.place.city = 'Chicago';
    assert.deepStrictEqual(actual, expected, 'Oups we have something wrong');
} catch (error) {
    // Display a raw arror (the stack and so on ...)
    //console.log(error);
    // Display an unicorn error
    console.log('error: '+error.message+' - code: '+error.code);
}

var equal = require('deep-equal');
console.dir([
    equal(
        { a : [ 2, 3 ], b : [ 4 ] },
        { a : [ 2, 3 ], b : [ 4 ] }
    ),
    equal(
        { x : 5, y : [6] },
        { x : 5, y : 6 }
    )
]);

let aaa = { a : [ 2, 3 ], b : [ 4 ] };
let bbb = { a : [ 2, 3 ], b : [ 4 ] };
let result = equal(aaa, bbb);
console.log(result);

console.log(equal(actual, expected));
actual.place.city = 'New York';
console.log(equal(actual, expected));