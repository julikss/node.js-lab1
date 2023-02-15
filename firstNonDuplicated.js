"use strict"

function findeFirstNonDuplicate(str){
    let a = str.toLowerCase().split('');
    let counts = {};
    let results = [];

 for(let i =0; i < a.length; i++){ 
     if (counts[a[i]]){
     counts[a[i]] += 1
     } else {
     counts[a[i]] = 1
     }
    }  
    for (let key in counts){
        if (counts[key] == 1){
            results.push(key);
        }
    }
    console.log("First element: " + results[0]);
}

findeFirstNonDuplicate("sSyttes")