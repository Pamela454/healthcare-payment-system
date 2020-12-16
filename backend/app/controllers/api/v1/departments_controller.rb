class Api::V1::DepartmentsController < ApplicationController

  #before_action :set_account

  def index
    if logged_in?
  	   @departments = current_user.department
  	   render json: @departments, status: ok
    else
        render json: {
          error: "not logged in", status: :unauthorized
        } 
    end
  end

  def create
    puts "departments_controller:create"
  	@department = @account.departments.new(department_params)
  	if @department.save
  		render json: @account
  	else
  		render json: {error: 'Error creating new department'}
  	end
  end

  def show
  	@department = Department.find(params[:id])
  	render json: @department, include: '**'
  end

  def update
  	@department = Department.find(params[:id])
  	@department.update(department_params)
  	render json: @account 
    
  end

  def destroy
  	@department = Department.find_by(params[:id])
  	@account = Account.find(@department.account_id)
  	@department.destroy
  	render json: @account
  end

  private

  #def set_account
    #binding.pry
  	#@account = Account.find(params[:account_id])
  #end

  def department_params
  	params.require(:department).permit(:name, :service, :charge, :account_id)
  end

end