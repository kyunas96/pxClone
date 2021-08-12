class Api::PostsController < ApplicationController

  def index 
    @followed_users_id = Follow.where(follower: current_user.id).map(&:followed_user_id)
    @liked_posts_ids = Like.where(user_id: current_user.id).map(&:post_id)
    @posts = Post.where(:poster_id => @followed_users_id).order(:created_at)

    p "Posts index "
    p "@followed_users_id: " + @followed_users_id.inspect
    p "@liked_posts: " + @liked_posts_ids.inspect
    p "@posts: " + @posts.inspect

    render 'api/posts/index'
  end

  def show
    @post = Post.find_by(id: params[:id])

    p "post show " + @post.inspect

    if @post 
      p "Succeded"
      @poster = User.find_by(id: @post.poster_id).user_photo.blob
      @liked = Like.find_by(user: current_user, post: @post) ? true : false
      @following = Follow.find_by(follower: current_user, followed_user: @post.user) ? true : false
      render :show, status: 200
      return
    else
      p "Failed"
      render json: {error: "Post does not exist" }.to_json, status: 404
      return
    end
  end

  def create
    poster_id_appended = post_params
    poster_id_appended['poster_id'] = current_user.id

    @post = Post.new(poster_id_appended)
    
    if @post.save
      render json: {id: @post.id, posterId: current_user.id}
    else
      render json: @post.errors.full_messages
    end

  end

  def liked_posts
    @liked_posts_ids = Like.where(user_id: current_user.id).order(:created_at).map(&:post_id)
    p "likedPostIds: " + @liked_post_ids.inspect
    @liked_posts = Post.where(:id => @liked_post_ids).order(:created_at)

    render :liked_posts
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