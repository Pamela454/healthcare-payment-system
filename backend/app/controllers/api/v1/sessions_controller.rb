class SessionsController < ApplicationController
  def create
    @account = Account.find_by(name: params[:name])
    return head(:forbidden) unless @account.authenticate(params[:password])
    session[:account_id] = @account.id
  end
end