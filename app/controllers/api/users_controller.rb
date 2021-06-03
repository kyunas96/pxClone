class Api::UsersController < ApplicationController

  def index
    @users = User.all

    render :index
  end

  def show
    @user = User.find_by(id: params[:id])

    render :show
  end

  def create
    @user = User.new(
      username: params[:username],
      email: params[:email],
      password: params[:password]
    )

    if @user.save
      render :show
    else
      @errors = @user.errors.full_messages
      render json: @errors
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

  # def user_params
  #   params.require(:user).permit(:username, :email, :password)
  # end
  
end
