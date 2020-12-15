class Api::V1::SessionsController < ApplicationController

  def create
    @account = Account.find_by(name: params[:user][:name])
    
    if @account && @account.authenticate(params[:user][:password])
      binding.pry
      render json: {account: @account}
    else
      resp = {
        error: "Invalid credentials",
      }
      render json: resp, status: :unauthorized 
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

  def session_params #should be session params? 
    puts "session_controler:params"
    params.permit(:data)
  end
end