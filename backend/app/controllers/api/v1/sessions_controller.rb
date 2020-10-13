class SessionsController < ApplicationController
  def create
    @account = Account.find_by(name: params[:name])
    return head(:forbidden) unless @account.authenticate(params[:password])
    session[:account_id] = @account.id
  end

  def is_logged_in?
    if logged_in? && account
      render json: {
        logged_in: true,
        user: account
      }
    else
      render json: {
        logged_in: false,
        message: 'no such user'
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