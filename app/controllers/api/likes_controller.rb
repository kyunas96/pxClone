class Api::LikesController < ApplicationController

  def index 
    p "reached likes index"
     @liked_posts = Like.where(:user_id => current_user.id).map(&:post_id)

     p "liked posts" + @liked_posts.inspect

    render json: @liked_posts
  end

  def create
    @like = Like.new(post_id: params[:id], user_id: current_user.id)
    if @like.save
      render json: {id: params[:id], liked: true}
    else
      render json: @like.errors.full_messages.join(', ')
    end
  end

  def destroy
    @like = current_user.likes.find_by(post_id: params[:id])

    if @like
      if @like.destroy
        render json: {id: params[:id], liked: false}
      else
        render json: @like.errors.full_messages.join(', ')
      end
    else
      render json: "like does not exist"
    end
  end

end