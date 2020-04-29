Rails.application.routes.draw do
  get 'accounts/index'
  get 'accounts/create'
  get 'accounts/update'
  get 'accounts/destroy'
  resources :departments
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
