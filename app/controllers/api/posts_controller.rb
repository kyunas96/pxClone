class Api::PostsController < ApplicationController

  def index
    @posts = Post.all

    render :index
  end

  def show
    @post = Post.find_by(id: params[:id])
    
    render :show
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