Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, default: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :show, :create, :update]
    resources :profile, only: [:show]
    resources :posts, only: [:index, :show, :create, :update, :destroy]

    # Routes to FollowsController
    # post '/follows' => 'follows#create'
    # delete '/follows' => 'follows#destroy'
    # Mark for deprication
    # get '/follows/followers' => 'follows#followers'
    # get '/follows/followings' => 'follows#followings'
  end
end
