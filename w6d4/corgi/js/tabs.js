$.Tabs = function (el) {
  this.$el = $(el);
  var selector = this.$el.data("content-tabs");
  this.$contentTabs = $(selector);

  this.activeTab = this.$contentTabs.find(".active");

  this.$el.on("click", "a", function (e) {
    this.clickTab(e);
  }.bind(this));
};

$.Tabs.prototype.clickTab = function(e) {
  e.preventDefault();

  //remove old classes
  //activeTab is the article
  this.activeTab.removeClass("active");
  $("a.active").removeClass("active");

  this.activeTab.addClass("transitioning"); //.css("opacity", 0);

  //add new classes
  var $current = $(e.currentTarget);
  $current.addClass("active");

  //articles
  var selector = $current.attr("href");
  var curArticle = $("article" + selector);

  //this.activeTab = curArticle.attr("class", "active");
  this.activeTab.one("transitionend", function() {
    this.activeTab.removeClass("transitioning");
    this.activeTab = curArticle.addClass("active").addClass("transitioning");

    setTimeout(function () {
      this.activeTab.removeClass("transitioning");
    }.bind(this), 0);
  }.bind(this));
};

$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};
