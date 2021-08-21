class Api::LikesController < ApplicationController

  def liked_posts
    @user_id = params[:user_id]
    @liked_posts_ids = Like.where(user_id: @user_id).map(&:post_id)
    p "likedPostIds: " + @liked_posts_ids.inspect
    @liked_posts = Post.where(:id => @liked_posts_ids).order(:created_at)
    p "likedPosts: " + @liked_posts.inspect

    render :liked_posts
  end

  def create
    @like = Like.new(post_id: params[:id], user_id: current_user.id)
    if @like.save
      render json: {id: params[:id].to_i, liked: true}
    else
      render json: @like.errors.full_messages.join(', ')
    end
  end

  def destroy
    @like = current_user.likes.find_by(post_id: params[:id])

    if @like
      if @like.destroy
        render json: {id: params[:id].to_i, liked: false}
      else
        render json: @like.errors.full_messages.join(', ')
      end
    else
      render json: "like does not exist"
    end
  end

end