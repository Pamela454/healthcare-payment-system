class PaymentsController < ApplicationController

  def index
  	@payments = @department.payment
  	render json: @payments
  end

  def create
  end

  def show
  	@payment = Payment.find(params[:id])
  	render json: @payment
  end

  private

  def set_department
  	@department = Department.find(params[:department_id])
  end

  def payment_params
  	params.require(:payment).permit(:amount, :department_id)
  end

end
