class Api::V1::DepartmentsController < ApplicationController

  before_action :set_account

  def index
  	@departments = @account.department
  	render json: @departments
  end

  def create
  	@department = @account.departments.new(department_params)
  	if @department.save
  		render json: @department
  	else
  		render json: {error: 'Error creating new department'}
  	end
  end

  def show
  	@department = Department.find(params[:id])
  	render json: @department
  end

  def update
  	@department = Department.find(params[:id])
  	@department.update(department_params)
  	render json: @account 
    
  end

  def destroy
  	@department = Department.find_by(params[:id])
  	@account = Account.find(@transaction.account_id)
  	@transaction.destroy
  	render json: @account
  end

  private

  def set_account
  	@account = Account.find(params[:account_id])
  end

  def department_params
  	params.require(:department).permit(:service, :charge, :account_id)
  end

end