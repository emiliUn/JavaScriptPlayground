// let o1 =   {'age':28, 'name':'Doe','a':'Doe', 'place':{'street':'Broadway', 'city':'New York'}};
// let o2 = {'age':28, 'name':'Doe', 'a':'Doe','place':{'street':'Broadway', 'city':'New York'}};
// o2 = null;

// // for (var k in o1){
// //     if (o1.hasOwnProperty(k)) {
// //         console.log("Key is " + k + ", value is" + o1[k]);
// //     }
// // }

// // (!) work only for enumerables objects
// // https://developer.mozilla.org/fr/docs/Web/JavaScript/Caract%C3%A8re_%C3%A9num%C3%A9rable_des_propri%C3%A9t%C3%A9s_et_rattachement

// // compare(o1, o2);
// function objectEqual(refObj, compObj){
//     // case one obj is null
//     if(refObj === null){
//         if(compObj === null){
//             return true; // both obj are empty (so equal)
//         }else{
//             return false
//         }
//     }

//     // case one obj is empty
//     if(Object.keys(refObj).length === 0){
//         if(Object.keys(compObj).length === 0){
//             return true; // both obj are empty (so equal)
//         }else{
//             return false
//         }
//     }

//     // loop throught enumerable properties
//     for (var key in refObj) {
//         // nested objects ?
//         if(typeof(compObj[key]) === 'object'){
//             console.log('search in nested obj');
//             objectEqual(refObj[key], compObj[key]);
//         }else{
//             if(!compObj.hasOwnProperty(key)){ // do we have the same key
//                 return false;
//             }else{
//                 if(refObj[key] !== compObj[key]){ // are the value equal ?
//                     return false;
//                 }
//             }
//         }
//       }
//       return true;
// }


// let array1 = [1,{'a':1},2,'Vador'];
// let array2 = [1,{'a':1},2,'Vador'];
// arrayEqual(array1, array2)

// /**
//  * Compare two arrays
//  * @param {*} a1 an array
//  * @param {*} a2 an array
//  * @return {*} true or false 
//  * 
//  */
// function arrayEqual(a1, a2){
//     // Avoid undefined, null and other unwanted type
//     if(!Array.isArray(a1) || !Array.isArray(a2)){
//         return false
//     }

//     if(a1.length === a2.length){
//         a1.forEach(item => {
//             // Get item type
//             let itemType = Object.prototype.toString.call(item);
//             // Recursive comparaison
//             if('[object Array]'.indexOf(itemType) >= 0){
//                 if(a2.item !== undefined){
//                     arrayEqual(a1.item, a2.item);
//                 }else{
//                     return false;
//                 }
//             }
//             if('[object Object]'.indexOf(itemType) >= 0){
//                 if(a2.item !== undefined){
//                     objectEqual(a1.item, a2.item);
//                 }else{
//                     return false;
//                 }
//             }
//             // Simple comparaison
//             if(a2.indexOf(item) === -1){
//                 return false;
//             }
//         });
//     }else{
//         return false;
//     }

//     return true;
// }

// // cas tableau / vide
// // cas obj / vide

// //if( typeof(compObj.key) === undefined){