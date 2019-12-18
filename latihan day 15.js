function threeStepsAB (stepAB){
        // you can only write your code here!
    var arr=stepAB.split(''),arr2=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]!==' '){
            arr2.push(arr[i]);
        }
    }
    for(var a=0;a<arr2.length;a++){
        if(arr2[a]==='a'){
            for(var b=a;b<=(a+3);b++){
                if(arr2[b]==='b'){
                    return true
                }
            }
        }
    }
    return false;
} 

  
  // TEST CASES
  console.log(threeStepsAB('lane borrowed')); // true
  console.log(threeStepsAB('i am sick')); // false
  console.log(threeStepsAB('you are boring')); // true
  console.log(threeStepsAB('barbarian')); // true
  console.log(threeStepsAB('bacon and meat')); // false
  console.log(threeStepsAB('the man bored')) // true