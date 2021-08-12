class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:username])

    if !@user 
      render json: ["User does not exist"], status: 422
      return 
    end

    if @user && @user.is_password?(params[:password])
      login(@user)
      @posts = @user.posts.order(:created_at)
      @postIndices = @posts.pluck(:id)
      @liked_posts = []
      render :create
      return
    else
      render json: ["Invalid user and password combination"], status: 422
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
