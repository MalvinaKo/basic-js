const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  for(let i = 0; i < arr.length; i++){ 
    if (arr[arr.length-1]==='--discard-next' || arr[arr.length-1]==='--double-next') arr.splice(arr.length-1,1);
    else if (arr[0]==='--discard-prev' || arr[0]==='--double-prev') arr.splice(0,1);
    else 
      if ( arr[i] === '--discard-next' ) { 
        arr.splice(i, 2); 
        }
      else if ( arr[i] === '--discard-prev' ) { 
        arr.splice(i-1, 2);
        }
      else if ( arr[i] === '--double-next' ) {
        arr.splice(i, 1, arr[i+1]); 
        }
      else if ( arr[i] === '--double-prev' ) { 
        arr.splice(i, 1, arr[i-1]); 
        }
    };
      
    return arr
    };
