class Api::UsersController < ApplicationController

  def get_users_feed
    @followed_users_id = Follow.where(follower: current_user.id).map(&:followed_user_id)
    @posts = Post.where(:poster_id => @followed_users_id).order(:created_at)

    render 'api/posts/index'
  end

  def index
    @users = User.all

    render :index
  end

  def show
    @user = User.find_by(id: params[:id])

    render :show
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
