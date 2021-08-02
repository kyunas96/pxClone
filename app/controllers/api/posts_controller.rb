class Api::PostsController < ApplicationController

  def index 
    @followed_users_id = Follow.where(follower: current_user.id).map(&:followed_user_id)
    @liked_posts = Like.where(user_id: current_user.id).map(&:post_id)
    if !@followed_users_id.empty?
      @posts = Post.where(:poster_id => @followed_users_id).order(:created_at)
    end

    render 'api/posts/index'
  end

  def show
    @post = Post.find_by(id: params[:id])
    @poster = User.find_by(id: @post.poster_id).user_photo.blob
    @liked = Like.find_by(user_id: current_user.id, post_id: params[:id]) ? true : false
    @following = 
      Follow.find_by(follower_id: current_user.id, followed_user_id: @post.user.id) ? true : false

    p "post show " + @poster.inspect

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