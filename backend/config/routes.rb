Rails.application.routes.draw do

#root 'api/v1/login'
post 'api/v1/login',    to: 'api/v1/sessions#create'
delete '/logout',   to: 'api/v1/sessions#destroy'
post 'api/v1/signup' => 'api/v1/accounts#create'
get 'api/v1/logged_in' => 'api/v1/sessions#is_logged_in?'
post 'api/v1/accounts/:id/payments/new' => 'api/v1/payments#create'

 namespace :api do
	namespace :v1 do 
  	resources :accounts do 
  		resources :departments 
  	    resources :payments
  	end
  end
 end
 
end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
