class ApplicationController < ActionController::Base  #changed for complete functionality 
   skip_before_action :verify_authenticity_token # prevent CSRF attack 
   helper_method :login!, :is_logged_in?, :current_user, :authorized_user?, :logout!, :set_account
    
  def login!
      session[:account_id] = @account.id
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

end
