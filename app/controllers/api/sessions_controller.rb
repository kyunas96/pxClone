class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:username])

    if !@user 
      render json: { errors: "User does not exist" } 
      return 
    end

    if @user && @user.is_password?(params[:password])
      login(@user)
      render :create
      return
    else
      render json: { errors: "Invalid user and password combination" }
      return
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
