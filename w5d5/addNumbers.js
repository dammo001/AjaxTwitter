var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function(sum, numsLeft, completionCallback){
    if(numsLeft === 0){
      completionCallback(sum);
      return;
    }

    reader.question("Enter number: ", function(numString){
      var num = parseInt(numString);
      sum += num;
      console.log("Partial Sum: "+ sum);

      addNumbers(sum, numsLeft-1, completionCallback);
    });
};

addNumbers(0, 3, function(sum){
  console.log("Total Sum: " + sum);
  reader.close();
});
