class Api::FollowsController < ApplicationController 

  def followers
    user = User.includes(:followers).find_by(id: params[:user_id])
    @follower_ids = user.followers.map(&:id)
    @users = User.includes(user_photo_attachment: :blob).where(id: @follower_ids)

    render :follow_list
  end

  def followings
    user = User.includes(:followings).find_by(id: params[:user_id])
    @followings_ids = user.followings.map(&:id)
    @users = User.includes(user_photo_attachment: :blob).where(id: @followings_ids)
    
    render :follow_list
  end

  def following
    current_user_id = current_user.id.to_s
    @follow = Follow.find_by(
      follower_id: current_user_id,
      followed_user_id: params[:followee_id]
    )

    p "follow" + @follow.inspect

    if @follow
      p "following"
      render json: { following: true }
      return
    else
      p "not following"
      render json: { following: false }
      return
    end

  end

  def create
    p "params" + params.inspect
    p "current_user_id " + current_user.id.to_s
    p "followed_user_id " + params[:followed_user_id].to_s
    

    @follow = Follow.new(
      follower_id: current_user.id, 
      followed_user_id: params[:followed_user_id]
    )

    if @follow.save
      render json: { following: true, userId: params[:followed_user_id].to_i }
    else
      render json: "follow not created"
    end

  end

  def destroy
    p "reached follow destroy"

    @follow = Follow.find_by({
      follower_id: current_user.id,
      followed_user_id: params[:followed_user_id]
    })

    if @follow
      if @follow.destroy
        render json: { following: false, userId: params[:followed_user_id].to_i }
      end
    end
  end

end