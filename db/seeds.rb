# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.destroy_all
Post.destroy_all

# 1: Kevin
User.create(username: "Kevin", email: "kevinyunas@icloud.com", password: "myPassword")
# 2: Daniel
User.create(username: "Daniel", email: "daniel@email.com", password: "danielPassword")
# 3: Gabby
User.create(username: "Gabby", email: "gabby@email.com", password: "gabbyPassword")
#4 :Kriste
User.create(username: "Kriste", email: "kriste@email.com", password: "kristePassword")

daniel1 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/daniel1.jpg")
daniel2 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/daniel2.jpg")
daniel3 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/daniel3.jpg")
daniel4 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/daniel4.jpg")
davis1 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/davis1.jpg")
davis2 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/davis2.jpg")
dazed = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/dazed.jpg")
gabby = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/gabby.jpg")
gpa = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/gpa.jpg")
griffith = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/griffith.jpg")
kriste = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/kriste.jp2")
littletokyo = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/littletokyo.jpg")
palace = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/palace.jp2")
sd = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/sd.jpg")
sm = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/sm.jpg")
sm1 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/sm1.jpg")
topanga1 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/topanga1.jpg")
topanga2 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/topanga2.jpg")
torn = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/torn.jpg")
tunnel = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images/tunnel.jpg")

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
daniel1Post.save!
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