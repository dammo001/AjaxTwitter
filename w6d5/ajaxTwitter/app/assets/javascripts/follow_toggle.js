( function (){

  $.FollowToggle = function (el) {
  this.$el = $(el);
  this.userId = this.$el.data('user-id');
  this.followState = this.$el.data('initial-follow-state');
  this.render();
  this.handleClick();


};

$.FollowToggle.prototype.render = function () {
    if ( this.followState === 'unfollowed' ) {
      this.$el.text("Follow me!");
    } else if (this.followState === "following") {
      this.$el.text("Following");
    } else if (this.followState === "unfollowing"){
      this.$el.text("Unfollowing");
    } else{
      this.$el.text("Unfollow me :(");
    }
  };

$.FollowToggle.prototype.handleClick = function() {
  var that = this;

  this.$el.click( function(e) {
    $('button').prop('disabled', true);

    var reqType, updateType;
    e.preventDefault();
    if(that.followState === "followed"){
      that.followState = "unfollowing";
      reqType = "delete";
      updateType = "unfollowed";
    } else if (that.followState === "unfollowed"){
      reqType = "post";
      that.followState = "following";
      updateType = "followed";
    } else {
      return;
    }

    that.render();

    $.ajax({
      type: reqType,
      url: that.userId + '/follow',
      dataType: 'json',
      success: function() {
        that.followState = updateType;
        that.render();
        $('button').prop('disabled', false);
      },
      failure: function() {
        alert('Something went wrong.');
        $('button').prop('disabled', false);
      }
    });
  });

};

$.fn.followToggle = function () {
  return this.each(function () {
    new $.FollowToggle(this);
  });
};


})();

$(function () {
  $("button.follow-toggle").followToggle();
});
