#require 'stripe'

class Api::V1::PaymentsController < ApplicationController

   def index
  	@payments = @department.payment 
  	render json: @payments, include: '**'
   end
   
   def create
    @payment = Payment.new(payment_params)
    @departments = params[:departments]
    if @payment.save
      render json: PaymentSerializer.new(@payment)  
    else
      render json: {error: 'Error processing payment'}
    end
      #Stripe.api_key = ENV['STRIPE_SECRET_KEY'] 

   #begin 
     #account = Stripe::Account.create(
     	#:name => account.name,
     	#:source => params[:payment][:token]
     	#)

   	 #payment = Stripe::Charge.create({
   	 	#:account => account.id
   	 	#:amount => params[:payment][:amount]
   	   # }, {
   	   #  :idempotency_key => ip_key 
   	 	#})

   	#rescue Stripe::CardError => e
   		#render json: { message: 'oops'}, status: :not_acceptable 
   	#end 
   end

  def show
  	@payment = Payment.find(params[:id])
  	render json: @payment, include: '**'
  end

  private

  def set_department
  	@department = Department.find(params[:department_id])
  end

  def payment_params
  	params.permit(:amount, :account_id, :cardnumber, :expiration, :cvc)
  end
end
