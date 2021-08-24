# README

## pxClone

pxClone is a clone of 500px.com that allows users to share images with other users.

### Live Demo: 
  * https://pxclone.herokuapp.com/

### Technologies used:
* Ruby on Rails
  * connected to s3 remote bucket using ActiveStorage
* React 
* Redux

### Features

* Allows users to post images to the site and view them
* Feed component that allows users to see images

### Solution Highlights

- To provide the front-end with a bactch of data to work with, the posts controller supplies the main feed component with `users_followed_ids`, the `liked_post_ids`, and based on the ids within `liked_post_ids` grabs the relevant posts

```ruby
  def index
    @followed_users_id = Follow.where(follower: current_user.id).map(&:followed_user_id)
    @liked_posts_ids = Like.where(user_id: current_user.id).map(&:post_id)
    @posts = Post.where(:poster_id => @followed_users_id).order(:created_at)

    render 'api/posts/index'
  end
```

- The corresponding jbuilder for posts_controller#index

```ruby
  json.userId current_user.id

  if !@liked_posts_ids.empty?
      json.likedPosts @liked_posts_ids
  else
      json.likedPosts []
  end

  json.followedUsers @followed_users_id

  if !@posts.empty?
      json.posts do
          @posts.each do |post|
              json.partial! "api/posts/post", post: post
          end
      end
  else
      json.posts []
  end
```

- Profile-Navigation allowed for dynamic rendering of links based on the current
  url path represented by `rootUserPath`

```js
<div className="profile-navigation">
  <NavLink activeClassName="selected" to={`${rootUserPath}/profile`}>
    Posts
  </NavLink>
  <NavLink activeClassName="selected" to={`${rootUserPath}/likedPosts`}>
    Liked Posts
  </NavLink>
  <NavLink activeClassName="selected" to={`${rootUserPath}/followers`}>
    Followers
  </NavLink>
  <NavLink activeClassName="selected" to={`${rootUserPath}/followings`}>
    Following
  </NavLink>
</div>
```

- react-router-dom `Switch` allowed for conditional rendering of subcomponents based
  on the path selected from the Profile-Navigation links

```js
<Switch>
  <Route path={`${rootUserPath}/likedPosts`}>
    <LikedPostsFeed userId={userId} />
  </Route>
  <Route path={`${rootUserPath}/followers`}>
    <FollowersList userId={userId} />
  </Route>
  <Route path={`${rootUserPath}/followings`}>
    <FollowingsList userId={userId} />
  </Route>
  <Route path={`${rootUserPath}/profile`}>
    <ProfileFeed userId={userId} />
  </Route>
</Switch>
```

- Image Hover functionality was implemented using a wrapping container for default styling and when hovered would display flex the inner hover content

```scss
.image-container {
  position: relative;
  display: flex;
  margin: 2px;
  cursor: pointer;

  a {
    line-height: 0;
  }

  &:hover {
    .shadow {
      position: absolute;
      width: 100%;
      height: 100%;
      box-shadow: 0 0 1500px 2px rgba(0, 0, 0, 1) inset;
      border-radius: $border-radius;
      top: 0;
      left: 0;
    }

    // is responsible for changing display property from none to flex
    .image-hover {
      display: flex;
    }
  }

  & > img {
    width: 100%;
    height: auto;
    border-radius: $border-radius;
  }
}
```

```scss
.image-hover {
  display: none;
  position: absolute;
  top: 0;
  // commented out because hover pseudo-class will display the hover
  // display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background-color: transparent;
  z-index: 1;
  color: $text-color;
  border-radius: $border-radius;

  .image-hover-top {
    padding-top: 14px;
    padding-left: 10px;
  }

  .image-hover-bottom {
    padding: 0 10px 10px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
```
