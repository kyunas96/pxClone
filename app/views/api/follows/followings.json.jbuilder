json.followingIds @followings.map(&:id)

json.users do
  @followings.each do |followed|
    json.partial! "api/follows/user", user: followed
  end
end
