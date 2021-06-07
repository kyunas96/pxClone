class Api::PostsController < ApplicationController

  # this action will grab a batch of images based on the batch_params
  def grab_batch
    # @posts = Posts.include(userid: current_user.following)
  end

  def show
    p params
  end

  def batch_params
    params.permit(:offset, :count)
  end
end