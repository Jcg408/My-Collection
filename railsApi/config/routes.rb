Rails.application.routes.draw do
  namespace :api do
    resources :boxes
  end
end
