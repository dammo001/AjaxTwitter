Function.prototype.myBind = function (ctx) {
  var that = this;
  var args = [].slice.call(arguments);
  args.shift();
  var bfunc = function () {
    that.apply(ctx, args);
  };
  return bfunc;
};


var cat = {
  name: "Curie",
  changeName: function (name) {
    this.name = name;
  }
};

var cN = cat.changeName;
console.log(cat.name);
cN = cN.myBind(cat, "Breakfast");
cN();
console.log(cat.name);
