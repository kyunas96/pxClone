class Api::PostsController < ApplicationController

  def index 
    @followed_users_id = Follow.where(follower: current_user.id).map(&:followed_user_id)
    @posts = Post.where(:poster_id => @followed_users_id).order(:created_at)
    @liked_posts = Like.where(:user_id => current_user.id).map(&:post_id)

    p "feed posts " + @liked_posts.inspect

    render 'api/posts/index'
  end

  def show
    @post = Post.find_by(id: params[:id])

    if @post 
      render :show
    else
      render json: "Post does not exist"
    end
  end

  def create
    poster_id_appended = post_params
    poster_id_appended['poster_id'] = current_user.id

    @post = Post.new(poster_id_appended)
    
    if @post.save
      render json: {response: "Success"}
    else
      render json: @post.errors.full_messages
    end

  end

  def destroy
    # @post = Post.find_by(id: params[:id])

    # if @post 
    #   if current_user.id == @post.poster_id
    #     # @post.destroy
    #   end
    # else
    #   render json: "Post does not exist"
    # end
  end

  def post_params
    params.require(:post).permit(:title, :description, :photo)
  end
end