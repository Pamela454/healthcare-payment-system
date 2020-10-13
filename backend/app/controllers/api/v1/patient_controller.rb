class Api::V1::PatientController < AccountsController 

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