class Api::V1::AdministratorController < AccountsController

skip_before_action :verify_authenticity_token  helper_method :login!, :logged_in?, :current_user, :authorized_user?, :logout!def login!
    session[:user_id] = @user.id
  enddef logged_in?
    !!session[:user_id]
  enddef current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  enddef authorized_user?
     @user == current_user
   enddef logout!
     session.clear
   endend

  def index
  	@accounts = Account.all
  	render json: @accounts, include: '**'
  end

  def create
  	@account = Account.new(account_params)
  	if @account.save
  		render json: @account
  	else
  		render json: {error: 'Error creating new account'}
  	end
  end

  def show
  	@account = Account.find_by(params[:id])
  	render json: @account, include: '**'
  end

  def update
  	@account = Account.find_by(params[:id])
  	@account.update(account_params)
  	render json: @account 
  end

  def destroy
  	@account = Account.find_by(params[:id])
  	@account.destroy 
  end

  private

  def account_params
  	params.require(:account).permit(:name, :balance)
  end
end