$.Thumbnails = function (el) {
  this.$el = $(el);
  this.$activeImg = $(".gutter-images").children().eq(0);
  this.activate(this.$activeImg);
  this.gutterIdx = 0;
  this.$images = $(".gutter-images img");
  this.fillGutterImages();

  $(".gutter-images").on("click", "img", function(e) {
    var $current = $(e.currentTarget);

    this.$activeImg = $current;
    this.activate(this.$activeImg);
  }.bind(this));

  $(".gutter-images").on("mouseenter", "img", function(e) {
    var $current = $(e.currentTarget);

    this.activate($current);
  }.bind(this));

  $(".gutter-images").on("mouseleave", "img", function(e) {
    this.activate(this.$activeImg);
  }.bind(this));

  $("a.nav").on("click", function (e) {
    var $current = $(e.currentTarget);
    if ($current.attr("id") === "right") {
      this.gutterIdx++;
    } else {
      this.gutterIdx--;
    }

    this.fillGutterImages();
  }.bind(this));
};

$.Thumbnails.prototype.fillGutterImages = function () {
  $(".gutter-images img").remove();

  for (var i = this.gutterIdx + 1; i < this.gutterIdx + 6; i++) {
    $(".gutter-images").append(this.$images.eq(i % 15));
  }
};

$.Thumbnails.prototype.activate = function ($img) {
  $("div.active").children().remove();

  var clone = $img.clone();
  $("div.active").append(clone);
};

$.fn.thumbnails = function () {
  return this.each(function () {
    new $.Thumbnails(this);
  });
};
