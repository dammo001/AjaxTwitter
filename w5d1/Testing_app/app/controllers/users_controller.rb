class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      log_in_user(@user)
      redirect_to root_url
    else
      flash.now[:error] = @user.errors.full_messages
      render :new
    end
  end

  def new
    @user = User.new
    render :new
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
