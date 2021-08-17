json.followerIds @followers.map(&:id)

json.users do 
  @followers.each do |follower|
    json.partial! 'api/follows/user', user: follower
  end
end