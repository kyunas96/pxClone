class Api::ProfileController < ApplicationController
  def show
    @user = User.find_by(id: params[:id])

    p "user show " + @user.user_photo.inspect

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
    if current_user.id == params[:profile][:userId].to_i
      @user = User.find_by(id: current_user.id)

      p "permitted params " + update_params.inspect

      if @user.update(update_params)
        p "user updated"
        render json: "Reached backend"
        return 
      else
        p "user not updated"
        render json: "Reached backend"
        return 
      end
    end

    
  end

  def update_params
    params.require(:profile).permit([
      :user_photo, 
      :banner_image,
      :description,
      :firstname, 
      :lastname,
      :city,
      :country,
      :websiteURL,
      :instagram,
      :facebook,
      :twitter
    ])
  end
end
