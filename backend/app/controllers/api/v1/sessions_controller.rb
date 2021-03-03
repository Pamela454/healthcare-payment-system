class Api::V1::SessionsController < ApplicationController

  def create
    @account = Account.find_by(name: params[:name])
    #if successful generate JWT token, include token back in response to client
    #include user in response back as well 
    if @account && @account.authenticate(params[:password])
      session[:account_id] = @accound.id
      render json: AccountSerializer.new(@account), status: :ok
    else
      resp = {
        error: "Invalid credentials",
      }
      #render json: resp, status: :unauthorized 
    end
  end

  def get_current_account
    if is_logged_in?
      render json: AccountSerializer.new(current_account)
    else
      render json: {error: "No current account"}
    end 
  end

  def destroy
    session.clear
    render json: {
      status: 200,
      logged_out: true
    }
  end

end