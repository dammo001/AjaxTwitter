class SessionsController < ApplicationController

  def create
    @user = User.new(session_params)
    user = User.find_by_credentials(params[:session][:username],
                                    params[:session][:password])
    if user
      log_in_user(user)
      redirect_to root_url
    else
      flash.now[:error] = ["Invalid Username / Password combo"]
      render :new
    end
  end

  def new
    @user = User.new
    render :new
  end

  def destroy
    current_user.reset_session_token
    session[:session_token] = nil
    redirect_to new_session_url
  end

  private

  def session_params
    params.require(:session).permit(:username, :password)
  end
end
