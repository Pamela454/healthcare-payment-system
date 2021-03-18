class Api::V1::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @account = Account.find_by(name: params[:name])
    #if successful generate JWT token, include token back in response to client
    #include user in response back as well 
    if @account && @account.authenticate(params[:password])
      session[:account_id] = @account.id
      render json: AccountSerializer.new(@account)
    else
      render json: {
        error: "Invalid credentials",
      }
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


  def session_params
    params.require(:account).permit(:name, :password)
  end

end