const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  const newArr=arr;
  for(let i = 0; i < newArr.length; i++){ 
    if (newArr[newArr.length-1]==='--discard-next' || newArr[newArr.length-1]==='--double-next') newArr.splice(newArr.length-1,1);
    else if (newArr[0]==='--discard-prev' || newArr[0]==='--double-prev') newArr.splice(0,1);
    else 
      if ( newArr[i] === '--discard-next' ) { 
        newArr.splice(i, 2); 
        }
      else if ( newArr[i] === '--discard-prev' ) { 
        newArr.splice(i-1, 2);
        }
      else if ( newArr[i] === '--double-next' ) {
        newArr.splice(i, 1, newArr[i+1]); 
        }
      else if ( newArr[i] === '--double-prev' ) { 
        newArr.splice(i, 1, newArr[i-1]); 
        }
    };
      
    return newArr
    };
