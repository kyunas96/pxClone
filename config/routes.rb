Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, default: { format: :json } do
    resource :session, only: [:create, :destroy], defaults: {format: :json}
    resources :users, only: [:index, :show, :create, :update], defaults: {format: :json}
    resources :posts, only: [:index, :show, :create, :update], defaults: {format: :json}
    get '/likes/:user_id' => 'likes#liked_posts', defaults: {format: :json}
    resources :likes, only: [:create, :destroy], defaults: {format: :json}

    # resources :follows, only: [:create, :destroy]
    post '/followers' => 'follows#create'
    get '/followers' => 'follows#followers'
    get '/followings' => 'follows#followings'
    get '/following/:followee_id' => 'follows#following'

    post '/follows' => 'follows#create'
    delete '/follows' => 'follows#destroy'

    # Routes to FollowsController
    # post '/follows' => 'follows#create'
    # delete '/follows' => 'follows#destroy'
    # Mark for deprication
    # get '/follows/followers' => 'follows#followers'
    # get '/follows/followings' => 'follows#followings'
  end
end
