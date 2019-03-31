
let i1 = [1,{'a':1},2,'Vador'];
let i2 = [1,{'a':1},2,'Vador'];

// i1 = [1,2,['yolo',1],'Vador'];
// i2 = [1,2,['yolo',1],'Vador'];

i1 = [1,2,{'yolo':1, 'popo':'jo'},'Vador'];
i2 = [1,2,{'yolo':1, 'popo':'jo'},'Vador'];

console.log(isEqual(i1, i2));

function isEqual(item1, item2){
    const item1Type = Object.prototype.toString.call(item1);
    if(item1Type === Object.prototype.toString.call(item2)){
        switch (item1Type) {
            case '[object Array]':
                return arrayEqual(item1, item2);
                // break;
            case '[object Object]':
                return objectEqual(item1, item2);
                // break;
                default:
            break;
        }
    }else{
        return false;
    }
}


function objectEqual(refObj, compObj){
    // case one obj is null
    if(refObj === null){
        if(compObj === null){
            return true; // both obj are empty (so equal)
        }else{
            return false;
        }
    }

    // case one obj is empty
    if(Object.keys(refObj).length === 0){
        if(Object.keys(compObj).length === 0){
            return true; // both obj are empty (so equal)
        }else{
            return false;
        }
    }

    // Let's compare our obj properties
    for (var key in refObj) {
        let itemType = Object.prototype.toString.call(refObj[key]);
            // Recursive comparaison
            if(itemType === '[object Array]' || itemType === '[object Object]'){
                // TODO mettre un if! return comme dans la fonction is array
                isEqual(refObj[key], compObj[key]);
            }else{
                if(!compObj.hasOwnProperty(key)){ // do we have the same key
                    return false;
                }else{
                    if(refObj[key] !== compObj[key]){ // are the value equal ?
                        return false;
                    }
                }  
            }
    }
    return true;
}


function arrayEqual(a1, a2){
    // Avoid undefined, null and other unwanted type
    if(!Array.isArray(a1) || !Array.isArray(a2)){
        return false;
    }

    if(a1.length === a2.length){
        for(let i=0; i<a1.length ;i++){
            // Get item type
            let itemType = Object.prototype.toString.call(a1[i]);
            // Recursive comparaison
            if(itemType === '[object Array]' || itemType === '[object Object]'){
                // TODO use index of or something like that
                if(!isEqual(a1[i],a2[i])){
                    return false;
                }
            }else{ // Simple comparaison
                if(a2.indexOf(a1[i]) === -1){
                    return false;
                }
            }
        }
    }else{
        return false;
    }
    return true;
}


// https://stackoverflow.com/questions/8668174/indexof-method-in-an-object-array