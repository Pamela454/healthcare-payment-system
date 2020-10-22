class Api::V1::SessionsController < ApplicationController

  def create
    @account = Account.find_by(name: session_params[:name])

    if @account && @account.authenticate(session_params[:password])
      session[:account_id] = @account.id
      render json: @account
    else
      render json: { status: 401, errors: ['no such account, please try again']
      }
    end
  end

  def is_logged_in?
    if logged_in? && @account
      render json: {
        logged_in: true,
        account: account
      }
    else
      render json: {
        logged_in: false,
        message: 'no such account'
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

  private

  def session_params
    params.require(:account).permit(:name, :password)
  end
end