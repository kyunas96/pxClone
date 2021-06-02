class Api::UsersController < ApplicationController

  def index
    @users = Users.all
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render :show
    else
      @errors = user.errors.full_messages
      render :show
    end

  end

  def update
    @user = User.find_by(id: params[:id])

    if @user
      if @user.save

      else

      end
    else

    end
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
  
end
