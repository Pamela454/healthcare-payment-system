class PaymentsController < ApplicationController
	before_action :set_department

  def index
  	@payments = @department.payment 
  	render json: @payments
  end

  def create
  	@payment = @department.payments.new(payment_params)
  	if @department.new_balance(@payment) != 'Payment cannot be processed'
  		@payment.save
  		render json: @payment
  	else 
  		render json: (error: 'Error submitting payment')
  	end
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
