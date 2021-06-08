Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, default: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :show, :create, :update]

    # Routes to FollowsController
    get '/follows/followers' => 'follows#followers'
    get '/follows/followings' => 'follows#followings'
    post '/follows' => 'follows#create'
    delete '/follows' => 'follows#destroy'

    # Routes to PostsController
    get 'posts' => 'posts#grab_batch'
    get 'posts/:id' => 'posts#show'
  end
end
