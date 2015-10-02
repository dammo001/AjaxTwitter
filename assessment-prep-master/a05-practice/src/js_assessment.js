(function () {
  // Make a namespace `Assessment`.
  if (typeof Assessment === 'undefined'){
    window.Assessment = {};
  }

  // write String.prototype.mySlice. It should take a start index and an
  // (optional) end index.


  // write Array.prototype.myReduce (analogous to Ruby's Array#inject).

  // write Array.prototype.quickSort(comparator). Here's a quick refresher if
  // you've forgotten how quickSort works:
  //   - choose a pivot element from the array (usually the first)
  //   - for each remaining element of the array:
  //     - if the element is less than the pivot, put it in the left half of the
  //     array.
  //     - otherwise, put it in the right half of the array.
  //   - recursively call quickSort on the left and right halves, and return the
  //   full sorted array.

  // write myFind(array, callback). It should return the first element for which
  // callback returns true, or undefined if none is found.

  // write sumNPrimes(n)

  // write Function.prototype.myBind.
  Function.prototype.myBind = function (context) {
    var fn = this;
    var bindArgs = [].slice.call(arguments, 1);
    return function(){
      var callArgs = [].slice.call(arguments);
      return fn.apply(context, bindArgs.concat(callArgs));
    };
  };

  // write Function.prototype.inherits.

  Function.prototype.inherits = function(parent){
    var Surrogate = function(){};
    Surrogate.prototype = parent.prototype;
    var child = this;
    child.prototype = new Surrogate();
    child.prototype.constructor = child;
  };

  Function.prototype.curriedSum = function(numArgs){
    var numbers = [];
    return function _curriedSum(n){
      numbers.push(n);
      if (numbers.length === numArgs){
        var totalSum = 0;
        for (var i = 0; i < numbers.length; i++) {
          totalSum += numbers[i];
        }
        return totalSum;
      } else {
        return _curriedSum;
      }
    return _curriedSum;
    };
  };

  Function.prototype.curry = function(numArgs){
    var fn = this;
    var args = [];
    function _curriedFn(arg){
      if (args.length === numArgs){
        return fn.apply(null, args);
      } else{
        return _curriedFn;
      }
      return _curriedFn;
    }
    return _curriedFn;
  };

})();
