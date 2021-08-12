class Api::UsersController < ApplicationController

  def index
    @users = User.all

    render :index
  end

  def show
    @user = User.find_by(id: params[:id])
    # when a user is grabbed to display their profile, the response will contain
    # the user's information, the posts, and the indices of the posts
    # passing the indices of the posts to the front end allows the profile to be 
    # rerendered by grabbing the indices of the posts from state
    if @user
      @posts = @user.posts.order(:created_at)
      @postIndices = @posts.pluck(:id)
      render :show, status: 200
      return
    else
      p "failed"
      render json: { error: "User does not exist"}, status: 404
      return
    end
  end

  def create
    p "params " + params.inspect
    @user = User.new(user_params)
    @errors = []

    if @user.save
      render :create
    else
      @errors = @user.errors.full_messages

      p "Errors " + @errors.inspect
      render json: @errors, status: 422
    end

  end

  def update
    p "user update: " + params.inspect
    p "filtered params: " + user_params.inspect

    if (params[:id].to_i == current_user.id)
      @user = User.update(params[:id].to_i, user_params)
      render :update, status: 200
      return
    else
      render json: {error: "Access Denied: Users do not match"}, status: 403
      return
    end
  end

  def user_params
    params.require(:user).permit(
      :username, 
      :email,
      :firstname,
      :lastname,
      :country,
      :city,
      :websiteURL,
      :instagram,
      :facebook,
      :twitter,
      :description
    )
  end
  
end
