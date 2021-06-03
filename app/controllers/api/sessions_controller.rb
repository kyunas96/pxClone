class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:username])

    if @user && @user.is_password?(params[:password])
      login(@user)
      p session[:session_token]
      render json: @user
    end
    
  end

  def destroy
    p logged_in?
    if logged_in?
      render plain: "logged out"
      logout
    else
      render plain: "Not logged in"
    end
  end

end
