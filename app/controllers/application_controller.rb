class ApplicationController < ActionController::Base
  helper_method :logged_in?

  # CRRLL

  def current_user 
    @current_user || User.find_by(session_token: session[:session_token])
  end

  def require_login?
    
  end

  def reset_session_token
    session[:session_token] = current_user.reset_session_token!
  end

  def login

  end

  def logout

  end

  def logged_in?

  end

end
