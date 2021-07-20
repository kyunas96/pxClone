# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all

# 1: Kevin
User.create!(
  username: "Kevin", 
  email: "kevinyunas@icloud.com", 
  password: "myPassword",
  country: "United States",
  city: "Los Angeles",
  description: "When I'm not programming I like running around LA and catching
  the golden hour light or the breeze at the beach :)"
)
# 2: Daniel
User.create!(
  username: "Daniel", 
  email: "daniel@email.com", 
  password: "danielPassword",
  country: "United States",
  city: "Los Angeles",
  description: "Love film but it got too expensive :( so here are some digital
  photo dumps"
)
# 3: Gabby
User.create!(
  username: "Gabby", 
  email: "gabby@email.com", 
  password: "gabbyPassword",
  country: "United States",
  city: "Los Angeles",
  description: "Picked up a camera in Davis, CA and haven't stopped since"
)
#4 :Kriste
User.create!(
  username: "Kriste", 
  email: "kriste@email.com", 
  password: "kristePassword",
  country: "United States",
  city: "Los Angeles",
  description: "When I'm not making music I enjoy catching a couple snapshots"
)
#5 :Demo
User.create!(
  username: "demoUser", 
  email: "demo@email.com", 
  password: "password",
  country: "United States",
  city: "Los Angeles"
)

daniel1 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/daniel1.jpeg")
daniel2 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/daniel2.jpeg")
daniel3 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/daniel3.jpeg")
daniel4 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/daniel4.jpeg")
davis1 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/davis1.jpeg")
davis2 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/davis2.jpeg")
dazed = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/dazed.jpeg")
gabby = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/gabby.jpeg")
gpa = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/gpa.jpeg")
griffith = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/griffith.jpeg")
kriste = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/kriste.jpeg")
littletokyo = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/littletokyo.jpeg")
palace = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/palace.jpeg")
sd = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/sd.jpeg")
sm = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/sm.jpeg")
sm1 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/sm1.jpeg")
topanga1 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/topanga1.jpeg")
topanga2 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/topanga2.jpeg")
torn = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/torn.jpeg")
tunnel = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/tunnel.jpeg")

daniel1Post = Post.new(title: "Beach B/W", poster_id: 2, description: "")
daniel2Post = Post.new(title: "Cheesin in Davis", poster_id: 2, description: "")
daniel3Post = Post.new(title: "Beach flying", poster_id: 2, description: "")
daniel4Post = Post.new(title: "How's my Nixon impression?", poster_id: 2, description: "")
davis1Post = Post.new(title: "b0red", poster_id: 3, description: "")
davis2Post = Post.new(title: "The Talking Heads", poster_id: 3, description: "")
dazedPost = Post.new(title: "Woah", poster_id: 2, description: "")
gabbyPost = Post.new(title: "Supreme Queen", poster_id: 3, description: "")
gpaPost = Post.new(title: "Yikes", poster_id: 2, description: "")
griffithPost = Post.new(title: "Thats a nice wallpaper", poster_id: 1, description: "")
kristePost = Post.new(title: "Ayyyyy", poster_id: 4, description: "")
littletokyoPost = Post.new(title: "City scapes", poster_id: 1, description: "")
palacePost = Post.new(title: "Woah", poster_id: 1, description: "")
sdPost = Post.new(title: "The water's fine", poster_id: 2, description: "")
smPost = Post.new(title: "POP", poster_id: 1, description: "")
sm1Post = Post.new(title: "When you need more photos", poster_id: 1, description: "")
topanga1Post = Post.new(title: "You put the lime in the coconut", poster_id: 1, description: "")
topanga2Post = Post.new(title: "Mild mannered postcard", poster_id: 1, description: "")
tornPost = Post.new(title: "Torn", poster_id: 1, description: "")
tunnelPost = Post.new(title: "Ok so you're going to walk through this tunnel...", poster_id: 2, description: "")

daniel1Post.photo.attach(io: daniel1, filename: "daniel1.jpg")
daniel2Post.photo.attach(io: daniel2, filename: "daniel2.jpg")
daniel3Post.photo.attach(io: daniel3, filename: "daniel3.jpg")
daniel4Post.photo.attach(io: daniel4, filename: "daniel4.jpg")
davis1Post.photo.attach(io: davis1, filename: "davis1.jpg")
davis2Post.photo.attach(io: davis2, filename: "davis2.jpg")
dazedPost.photo.attach(io: dazed, filename: "dazed.jpg")
gabbyPost.photo.attach(io: gabby, filename: "gabby.jpg")
gpaPost.photo.attach(io: gpa, filename: "gpa.jpg")
griffithPost.photo.attach(io: griffith, filename: "griffith.jpg")
kristePost.photo.attach(io: kriste, filename: "kriste.jpg")
littletokyoPost.photo.attach(io: littletokyo, filename: "littleTokyo.jpg")
palacePost.photo.attach(io: palace, filename: "palace.jpg")
sdPost.photo.attach(io: sd, filename: "sd.jpg")
smPost.photo.attach(io: sm1, filename: "sm1.jpg")
topanga1Post.photo.attach(io: topanga1, filename: "topang1.jpg")
topanga2Post.photo.attach(io: topanga2, filename: "topanga2.jpg")
tornPost.photo.attach(io: torn, filename: "torn.jpg")
tunnelPost.photo.attach(io: tunnel, filename: "tunnel.jpg")

daniel1Post.save!
daniel2Post.save!
daniel3Post.save!
daniel4Post.save!
davis1Post.save!
davis2Post.save!
dazedPost.save!
gabbyPost.save!
gpaPost.save!
griffithPost.save!
kristePost.save!
littletokyoPost.save!
palacePost.save!
sdPost.save!
smPost.save!
topanga1Post.save!
topanga2Post.save!
tornPost.save!
tunnelPost.save!
