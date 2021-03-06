class Api::V1::SessionsController < ApplicationController
  #skip_before_action :verify_authenticity_token

  def create
    @account = Account.find_by(name: params[:name])
    current_user
    #if successful generate JWT token, include token back in response to client
    #include user in response back as well 
    if @account && @account.authenticate(params[:password])
      session[:account_id] = @account.id
      current_account
      account_type
      render json: AccountSerializer.new(@account)
    else
      render json: {
        status: 401,
        errors: "Invalid credentials",
      }
    end
  end

  def is_logged_in?
    if logged_in? && current_account
      render json: {
        logged_in: true,
        account: current_account
      }
    else
      render json: {
        logged_in: false,
        errors: "not logged in"
      }
    end
  end

  def destroy
    logout! 
    render json: {
      status: 200,
      logged_out: true
    }
  end


  def session_params
    params.require(:account).permit(:name, :password)
  end

end