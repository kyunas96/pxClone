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

* The component that displayed the images never unmounted when swapping out images so I had to dynamically check the props from the container to determine if a rerender was necessary.

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

  * To make a hover feature for images I had to overlay a div over the image that displayed on hover and position a title on the top and picture interactions on the bottom.

  ```scss
  .image-hover {
    display: none;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    background-color: transparent;
    z-index: 3;
    color: rgba(255, 255, 255, 0.7);

    .image-hover-top {
      padding-top: 10px;
      padding-left: 10px;
    }

    .image-hover-bottom {
      padding-bottom: 10px;
      padding-left: 10px;
      padding-right: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

}
```
