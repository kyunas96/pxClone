{
  entities: {
    posts:{
      1: {
        id: 1,
        description: "Sunset",
        posterId: 25,
        imageUrl: "aws.com/photos/256"
      },
      2: {
        id: 2,
        description: "Skyline",
        posterId: 99,
        imageUrl: "aws.com/photos/576"
      }
    },
    users: {
      1: {
        id: 1,
        username: "goldenhour",
        imageUrl: "aws.com/photos/271"
      },
      2: {
        id: 2,
        username: "filmOnly",
        imageUrl: "aws.com/photos/999"
      }
    },
    likes: {
      1: {
        id: 1,
        postId: 5,
        likerId: 7
      },
      2: {
        id: 2,
        postId: 9,
        likerId: 20
      }
    },
    comments: {
      1: {
        id: 1,
        postId: 1,
        commenterId: 2,
        commentText: "Nice sunset"
      },
      2: {
        id: 2,
        postId: 2,
        commenterId: 2,
        commentText: "Is that LA?"
      }
    }

  },
  ui: {
    loading: true/false,
    currentImage: "aws.com/photos/576",
    imageBlowup: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    postForm: ["Post description cannot be blank", "Post must contain an image"]
  },
  session: {
    { 
      currentUserId: 25
    }
  }
}