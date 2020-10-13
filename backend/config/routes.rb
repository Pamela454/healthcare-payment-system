Rails.application.routes.draw do

delete '/logout', to: 'sessions#destroy'
get '/logged_in', to: 'sessions#is_logged_in?'

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
