class Api::ProfileController < ApplicationController

  def show
    @user = User.find_by(id: params[:id])
    @isCurrentUser = current_user.id == params[:id].to_i
    @following = !!Follow.find_by(
      follower_id: current_user.id,
      followed_user_id: @user.id
    )
    render :show
  end

end