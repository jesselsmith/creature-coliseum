Rails.application.routes.draw do
  resources :breeds, defaults: { format: :json }
  resources :monsters, defaults: { format: :json }
  resources :players, defaults: { format: :json }
  resources :encounters, defaults: { format: :json }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
