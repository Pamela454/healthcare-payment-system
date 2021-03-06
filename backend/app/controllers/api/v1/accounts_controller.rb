class Api::V1::AccountsController < ApplicationController

  def index
    if @account = Account.find_by(id: params[:id]) || @account.status == "admin"
      @accounts = Account.all
      render json: AccountSerializer.new(@accounts)
    end
  end

  def create
    @account = Account.new(account_params)
    if @account.save
      issue_token
      render json: AccountSerializer.new(@account) #should this be accounts? 
    else
      render json: {error: 'Error creating new account'}
    end
  end

  def get_current_account
    if logged_in?
      render json: AccountSerializer.new(current_account)
    else
      render json: {error: "No current account"}
    end 
  end

  def show
    @account = Account.find_by(id: params[:id])
    render json: AccountSerializer.new(@account)
  end

  def update
    @account = Account.find_by(id: params[:account_id])
    @account.update(account_params)
    render json: @account 
  end

  def destroy
    @account = Account.find_by(params[:id])
    @account.destroy 
  end

  private

  def account_params   
    #params.require(:account)
    params.permit(:account, :password, :name, :status)
  end
end