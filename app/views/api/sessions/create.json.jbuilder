  json.user do
    json.extract! @user, :id, :username
  end

  json.set! :errors do
    json.array! @errors
  end

