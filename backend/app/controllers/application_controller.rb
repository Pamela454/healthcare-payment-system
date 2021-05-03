class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :null_session   
  skip_before_action :verify_authenticity_token, if: :json_request? #treating backend as an API 
  before_action :set_csrf_cookie
  helper_method :login!, :logged_in?, :current_account, :logout! #passed to other controllers in app  
    
  def json_request? 
    request.format.json? 
  end

  def login!
      session[:account_id] = @account.id
      #localStorage.setItem("loggedIn", true);
  end
  
  def logged_in?
    !!current_account #or !!session[:account_id]
  end

  def current_account   
      @current_account = Account.find(@account.id) 
  end

  def logout!
    #session.clear ??
      localStorage.clear
  end

  #def set_account #need this as well as login! ?
     #@account = Account.find_by(id: session[:account_id])
  #end

  private

  def set_csrf_cookie  #is this necessary?
    cookies["CSRF-TOKEN"] = form_authenticity_token
  end

end
