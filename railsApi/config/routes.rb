Rails.application.routes.draw do
  namespace :api do
    resources :boxes, except: [:edit, :show, :update]
  end
end
