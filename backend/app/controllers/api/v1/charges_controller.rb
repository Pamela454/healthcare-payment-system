class ChargesController < ApplicationController

   def create
    binding.pry 
       Stripe.api_key = sk_test_YL9LwX6O769OsJcgA3tH1gjP 
       token = params[:stripeToken]
   begin 
    customer = Stripe::Customer.create(
	:name => current_account.name,
	:source => params[:charge][:token]
	)

	charge = Stripe::Charge.create({
		:customer => customer.id,
		:amount => params[:charge][:description],
		:currency => params[:charge][:currency],
	}, {
		:idempotency_key => ip_key
	})

	rescue Stripe::CardError => e
		render json: { message: 'oops' }, status: :not_acceptable
   	end
   end

end


