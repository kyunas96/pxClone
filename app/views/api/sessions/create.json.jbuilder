  json.session do
    json.extract! @user, :id, :username
  end

  json.set! :sessionErrors, "#{@errors}"

