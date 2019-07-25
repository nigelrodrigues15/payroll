Rails.application.routes.draw do
  resources :payslips
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    # resources :users, only: [:create]
    # resource :session, only: [:create, :destroy, :show]
    resources :employees, only: [:create, :destroy, :index, :show, :update]
    resources :payslips, only: [:create, :destroy, :index, :show, :update]
  end

end