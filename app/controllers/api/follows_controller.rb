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
    p "current_user_id " + current_user.id.to_s
    p "followed_user_id " + params[:followed_user_id].to_s
    

    @follow = Follow.new(
      follower_id: current_user.id, 
      followed_user_id: params[:followed_user_id]
    )

    if @follow.save
      render json: "created follow"
    else
      render json: "follow not created"
    end

  end

  def destroy
    p "reached follow destroy"

    # followInfo = {
    #   follower_id: current_user.id,
    #   followed_user_id: params[:followed_user_id]
    # }

    # @follow = Follow.find_by(followInfo)

    # if @follow
    #   @follow.destroy
    # end
  end

end