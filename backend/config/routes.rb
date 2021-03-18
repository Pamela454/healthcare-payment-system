Rails.application.routes.draw do

#root 'api/v1/sessions#create'
post 'api/v1/login',    to: 'sessions#create'
delete 'api/v1/logout',   to: 'sessions#destroy'
post 'api/v1/signup' => 'accounts#create'
post 'api/v1/get_current_account' => 'sessions#get_current_account'

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
