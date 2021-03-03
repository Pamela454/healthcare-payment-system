class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :exception

  before_action :set_csrf_cookie
  helper_method :login!, :is_logged_in?, :current_user, :authorized_user?, :logout!, :set_account
    
  def login!
      session[:account_id] = @account.id
      #localStorage.setItem("loggedIn", true);
  end
  
  def is_logged_in?
    !!current_user
  end

  def current_user   #JWT will try to call?
      Account.find_by(id: session[:account_id])
  end

  def logout!
      session.clear
  end

  def set_account #need this as well as login! ?
      @account = Account.find_by(id: session[:account_id])
  end

  private

  def set_csrf_cookie
    cookies["CSRF-TOKEN"] = form_authenticity_token
  end

end
