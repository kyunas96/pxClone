class Api::ProfileController < ApplicationController
  def show
    @user = User.find_by(id: params[:id])

    if @user
      
      if current_user
        @isCurrentUser = current_user.id == params[:id].to_i

        if @isCurrentUser
          @following = nil
        else
          @following = !!Follow.find_by(
          follower_id: current_user.id,
          followed_user_id: @user.id,
          )
        end
        
      else
        @following = nil
      end
      
      render :show
    else
      render json: "Profile not found"
    end
  end

  def update
    p "params: " + update_params.inspect

    render json: "Reached backend"
  end

  def update_params
    params.require(:profile).permit(:userPhoto, :bannerImage, :info)
  end
end
