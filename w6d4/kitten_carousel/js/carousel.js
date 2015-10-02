$.Carousels = function (el) {
  this.$el = $(el);
  this.activeIdx = 0;
  this.activeItem = $("ul").children().eq(0).addClass("active");
  this.transitioning = false;

  this.$el.on("click", "button", function (e) {
    var $current = $(e.currentTarget);
    var size = $("ul").children().length;

    if ($current.attr("class") === "slide-right") {
      if (this.transitioning) {
        return;
      }

      var oldItem = this.activeItem.addClass("right");
      this.transitioning = true;

      oldItem.one("transitionend", function () {
        oldItem.removeClass("active").removeClass("right");
        this.transitioning = false;
      }.bind(this));

      this.activeIdx--;
      this.activeItem = $("ul").children().eq(this.activeIdx % size);
      this.activeItem.addClass("active").addClass("left");

      setTimeout(function () {
        this.activeItem.removeClass("left");
      }.bind(this), 0);
    }
    else if ($current.attr("class") === "slide-left") {
      if (this.transitioning) {
        return;
      }

      var oldItemm = this.activeItem.addClass("left");

      this.transitioning = true;

      oldItemm.one("transitionend", function () {
        oldItemm.removeClass("active").removeClass("left");
        this.transitioning = false;
      }.bind(this));

      this.activeIdx++;
      this.activeItem = $("ul").children().eq(this.activeIdx % size);
      this.activeItem.addClass("active").addClass("right");

      setTimeout(function () {
        this.activeItem.removeClass("right");
      }.bind(this), 0);
    }
  }.bind(this));
};


// $.Carousels.prototype.shiftRight = function () {
//
// };
//
// $.Carousels.prototype.shiftLeft = function () {
//
// };

$.fn.carousels = function () {
  return this.each(function () {
    new $.Carousels(this);
  });
};
