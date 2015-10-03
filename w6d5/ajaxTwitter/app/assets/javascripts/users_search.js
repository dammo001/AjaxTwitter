( function($) {

  var UsersSearch = function(el) {
    this.$el = $(el);
    this.input = $(".users-search text");
    this.users = $("ul.users");

    this.handleInput();
  };

  UsersSearch.prototype.handleInput = function() {
    var that = this;
    this.$el.keyup( function(e) {
      e.preventDefault();
      var searchInput = $('.users-search input').val();
      var searchObject = {"query": searchInput};
      $.ajax({
        type: 'get',
        url: '/users/search',
        dataType: 'json',
        data: searchObject,
        success: function(data, textStatus, jqXHR) {
          that.renderResults(data);
        },
        error: function(jqXHR, statusText, error) {
          return;
        }
      });
    });
  };

  UsersSearch.prototype.renderResults = function(data) {
    var that = this;
    this.users.empty();
    data.forEach( function (el) {
      that.users.append("<li> "+ el.username + "</li>");
    });
  };

  $.fn.usersSearch = function () {
    return this.each(function () {
      new UsersSearch(this);
    });
  };

})(jQuery);

$(function () {
  $("div.users-search").usersSearch();
});
