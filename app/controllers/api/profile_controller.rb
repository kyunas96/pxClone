class Api::ProfileController < ApplicationController
  def show
    @user = User.find_by(id: params[:id])

    if @user
      @isCurrentUser = current_user.id == params[:id].to_i
      @following = !!Follow.find_by(
        follower_id: current_user.id,
        followed_user_id: @user.id,
      )
      render :show
    else
      render json: "Profile not found"
    end
  end

  def update 
    if current_user.id == params[:id].to_i
      @user = User.find_by(id: params[:id])
    else
      
    end

    p @user

    render json: "Reached profile update"
  end
end
