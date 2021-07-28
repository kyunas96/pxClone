class Api::LikesController < ApplicationController

  def create
    params[:like][:user_id] = current_user.id
    @like = Like.new(like_params)
    if @like.save
      flash[:success] = 'Thanks for liking!'
    else
      flash[:alert] = @like.errors.full_messages.join(', ')
    end
  end

  def destroy
    @like = current_user.likes.find(params[:id])``
    @like.destroy
  end

  protected
  def like_params
    params.require(:like).permit(:value, :user_id, :reference_id, :reference_type)
  end

end