// How to determine if variable `a` exist in my function.

// Sample 1
awesomFunction = (a)=> {
    if(a) console.log('Chirac')
    else console.log('Pompidou')
}
awesomFunction();
// Expected output : Pompidou - Output : Pompidou => no problems
awesomFunction(0);
// Expected output : Chirac - Output : Pompidou => we have something wrong
awesomFunction(null);
// Expected output : Chirac - Output : Pompidou => we have something wrong again ("The value null represents the intentional absence of any object value.")
awesomFunction(1);
// Expected output : Chirac - Output : Chirac => it is better but ...

// Sample 2
awesomFunction = (a)=> {
    if( a == undefined) console.log('Hollande')
    else console.log('De Gaulle')
}
awesomFunction();
// Expected output : Hollande - Output : Hollande => no problems
awesomFunction(0);
// Expected output : De Gaulle - Output : De Gaulle => ok
awesomFunction(1);
// Expected output : De Gaulle - Output : De Gaulle => ok ...
awesomFunction(null);
// Expected output : De Gaulle - Output : Hollande => Probem ... Wait a minute ?
// Null means null, not undefined, why ? Let try something else.

// Sample 3
awesomFunction = (a)=> {
    if( typeof(a) == 'undefined') console.log('Hollande')
    else console.log('De Gaulle')
}
awesomFunction();
// Expected output : Hollande - Output : Hollande => no problems
awesomFunction(0);
// Expected output : De Gaulle - Output : De Gaulle => ok
awesomFunction(1);
// Expected output : De Gaulle - Output : De Gaulle => ok ...
awesomFunction(null);
// Expected output : De Gaulle - Output : De Gaulle => Yeah !

/**
 * Conclusion : When you write this : if(!a){ ... } you only check if a is false
 * In js 0, NaN, undefined, false, null, are false
 * 
 * If you want to check if a variable is defined, prefer to use if(typeof(a)=="undefined")
 * 
 * When you do "==" js do a "loose equility". eg : "1" == 1 mean true as null == undefined mean true too
 * However "1" === 1 and null === undefined mean false. 
 * That's why you should use a === undefined or typeof(a) == 'undefined' but not a == undefined
 * 
 * Read more here :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
 * https://stackoverflow.com/questions/5101948/javascript-checking-for-null-vs-undefined-and-difference-between-and
 * 
 */