class Api::FollowsController < ApplicationController 

  def followers
    user = User.find_by(id: params[:user_id])

    @followers = user.followers

    render :followers
  end

  def followings
    user = User.find_by(id: params[:user_id])

    @followings = user.followings

    render :followings
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