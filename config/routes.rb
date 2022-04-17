Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :standups
    end
  end
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root to: redirect("/api/v1/standups")
  get "/api/v1/standups", to: "standups#index"
end
