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

      p "user show"
      p "@user " + @user.user_photo.inspect
      p "@posts " + @posts.inspect
      p "@postIndices " + @postIndices.inspect

      render :show

      return
    else
      render json: { error: "User does not exist"}
      return
    end
  end

  def get_user_posts
    @user = User.find_by(id: params[:userId])

      if @user
        @posts = @user.posts.order(:created_at)

        render '/api/posts/profile_posts'
      else
        render json: {error: "User does not exist"}
      end

    end

  def create
    @user = User.new(user_params)
    @errors = []

    if @user.save
      render :show
    else
      @errors = @user.errors.full_messages
      render :show
    end

  end

  def update
    @user = User.find_by(id: params[:id])

    if @user
      if @user.save

      else

      end
    else

    end
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
  
end
