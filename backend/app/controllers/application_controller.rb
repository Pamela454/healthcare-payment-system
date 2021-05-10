class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :null_session   
  skip_before_action :verify_authenticity_token, if: :json_request? #treating backend as an API 
  before_action :set_csrf_cookie
  helper_method :login!, :logged_in?, :current_account, :logout!, :account_type, :issue_token #passed to other controllers in app  
    
  def json_request? 
    request.format.json? 
  end

  def jwt_key
    ENV['SESSION_SECRET']
  end

  def issue_token(account)
    JWT.encode({account_id: account.id}, jwt_key, ‘HS256’)
  end

  def decoded_token
    begin
      JWT.decode(token, jwt_key, true, { :algorithm => ‘HS256’ })
    rescue JWT::DecodeError
      [{error: “Invalid Token”}]
    end
  end

  def token
    request.headers[‘Authorization’]
  end

  def account_id
    decoded_token.first[‘account_id’]
  end

  def login!
      session[:account_id] = @account.id
      #localStorage.setItem("loggedIn", true);
  end
  
  def logged_in?
    !!current_user
  end

  def current_user
    account ||= Account.find_by(id: account_id)
  end

  def logout!
    #session.clear ??
      localStorage.clear
  end

  def account_type
    Account.find(session[:account_id]).status
  end
  #def set_account #need this as well as login! ?
     #@account = Account.find_by(id: session[:account_id])
  #end

  private

  def set_csrf_cookie  #is this necessary?
    cookies["CSRF-TOKEN"] = form_authenticity_token
  end

end
