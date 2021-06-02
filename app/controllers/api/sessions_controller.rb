class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(session_params)

    if @user
      render :show
    else
      @errors = @user.errors.full_messages
      render :show
    end
  end

  def destroy
    if logged_in?
      current_user.logout
      session[:session_token]
    end
  end

  def session_params
    params.require(:session).permit(:username, :password)
  end
end
