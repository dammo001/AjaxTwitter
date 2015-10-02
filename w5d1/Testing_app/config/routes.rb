Rails.application.routes.draw do
  resource :session, only: [:create, :new, :destroy]
  resources :users, only: [:create, :new, :show]
  resources :dreams
  root to: 'dreams#index'
end
