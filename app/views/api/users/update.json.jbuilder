json.user do
  json.extract! @user, 
  :id, 
  :username,
  :firstname,
  :lastname,
  :description,
  :email, 
  :country, 
  :city, 
  :websiteURL, 
  :instagram,
  :facebook,
  :twitter
end