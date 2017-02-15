function findMissing(arr1, arr2) {
  
   if (JSON.stringify(arr1) === JSON.stringify(arr2)){
     return 0;
   }
   
    var a = [], diff = [];
    

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var j = 0; j < a2.length; j++) {
        if (a[a2[j]]) {
            delete a[a2[j]];
        } else {
            a[a2[j]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}

 