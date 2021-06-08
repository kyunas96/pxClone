class Api::FollowsController < ApplicationController 

  def followers

  end

  def followings
    
  end

  def create
    followInfo = {
      follower_id: current_user.id, 
      followed_user_id: params[:followed_user_id]
    }

    @follow = Follow.new(followInfo)

    if @follow.save

    else

    end
  end

  def destroy
    followInfo = {
      follower_id: current_user.id,
      followed_user_id: params[:followed_user_id]
    }

    @follow = Follow.find_by(followInfo)

    if @follow
      @follow.destroy
    end
  end

end