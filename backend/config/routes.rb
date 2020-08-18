Rails.application.routes.draw do

  get 'payments/index'
  namespace :api do
	namespace :v1 do 
  		resources :accounts do 
  			resources :departments do
  			  resources :payments
  			end
  		end
  	end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
