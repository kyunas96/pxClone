class Api::PostsController < ApplicationController

  def create
    @post = Post.new(post_params)

    # if @post.save
    #   render json: "Success"
    # else
    #   render json: @post.errors.full_messages
    # end
  end

  def destroy
    @post = Post.find_by(id: params[:id])

    if @post 
      if current_user.id == @post.poster_id
        # @post.destroy
      end
    else
      render json: "Post does not exist"
    end
  end

  def post_params
    params.require(:post).permit(:title, :description, :photoFile)
  end
end