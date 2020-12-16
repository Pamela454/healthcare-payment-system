class ApplicationController < ActionController::Base  #changed for complete functionality 
   skip_before_action :verify_authenticity_token # prevent CSRF attack 
   helper_method :login!, :logged_in?, :current_user, :authorized_user?, :logout!, :set_user
    
  def login!
      session[:account_id] = @account.id
  end
  
  def logged_in?
      !!session[:account_id]  #boolean value 
  end

  #def current_user   AWS will try to call 
      #@current_user ||= Account.find(session[:account_id]) if session[:account_id]
  #end

  def authorized_user?
      @account == current_user
  end

  def logout!
      session.clear
  end

  def set_user
      @account = Account.find_by(id: session[:account_id])
  end

end
