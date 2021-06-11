# README

## pxClone

pxClone is a clone of 500px.com that allows users to share images with other users.

### Live Demo: 
  * https://pxclone.herokuapp.com/

### Technologies userd:
* Ruby on Rails
  * connected to s3 remote bucket using ActiveStorage
* React 
* Redux

### Features

* Allows users to post images to the site and view them
* Created a feed component that allows users to see images

### Solution Highlights

```js
shouldComponentUpdate(nextProps, nextState) {
    if (this.props.postId !== nextProps.postId) {
      this.props.requestPost(nextProps.postId)
      return true;
    } else if (nextProps.post !== this.props.post) {
      return true;
    } else {
      return false;
    }
  }
  ```
