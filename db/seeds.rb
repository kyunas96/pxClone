# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all

# add user_photo and banner_image to each user

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

beach = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/beach.jpeg")
canyon = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/canyon.jpeg")
murica = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/murica.jpeg")
tracks = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/tracks.jpeg")
surfsup = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/surfsup.jpeg")
monk = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/monk.jpeg")
nosotros = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/nosotros.jpeg")
hashtag = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/hashtag.jpeg")
grafitti = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/graffiti.jpeg")
ninguno = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/ningunos.jpeg")
trippy = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/trippy.jpeg")
trisha = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/trisha.jpeg")
lies = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/lies.jpeg")
stairs = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/stairs.jpeg")
daniel10 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/daniel10.jpeg")
mardigras = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/mardigras.jpeg")
soak = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/soak.jpeg")
hangloose = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/hangloose.jpeg")
sunset = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/sunset.jpeg")
daniel5 = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/daniel5.jpeg")

kevinProfile = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/portrait.jpg")
kevinBanner = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/graffiti.jpeg")

danielProfile = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/daniel2.jpeg")
danielBanner = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/sd.jpeg")

gabbyProfile = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/gabs.JPG")
gabbyBanner = open("https://pxclone-seeds.s3.us-west-1.amazonaws.com/pxclone-images-compressed/davis2.jpeg")



# 1: Kevin
kevin_user = User.create!(
  username: "Kevin", 
  email: "kevinyunas@icloud.com", 
  password: "myPassword",
  country: "United States",
  city: "Los Angeles",
  description: 'When I\'m not programming I like running around LA and '\
  'catching the golden hour light or the breeze at the beach :)'
)

kevin_user.user_photo.attach(io: kevinProfile, filename: "kevinProfile.jpg")
kevin_user.banner_image.attach(io: kevinBanner, filename: "kevinBanner.jpg")
# 2: Daniel
daniel_user = User.create!(
  username: "Daniel", 
  email: "daniel@email.com", 
  password: "danielPassword",
  country: "United States",
  city: "Los Angeles",
  description: 'Love film but it got too expensive :( so here are some '\
  'digital photo dumps'
)

daniel_user.user_photo.attach(io: danielProfile, filename: "danielProfile.jpg")
daniel_user.banner_image.attach(io: danielBanner, filename: "danielBanner.jpg")
# 3: Gabby
gabby_user = User.create!(
  username: "Gabby", 
  email: "gabby@email.com", 
  password: "gabbyPassword",
  country: "United States",
  city: "Los Angeles",
  description: "Picked up a camera in Davis, CA and haven't stopped since"
)

gabby_user.user_photo.attach(io: gabbyProfile, filename: "gabbyProfile.jpg")
gabby_user.banner_image.attach(io: gabbyBanner, filename: "gabbyBanner.jpg")
#5 :Demo
User.create!(
  username: "demoUser", 
  email: "demo@email.com", 
  password: "password",
  country: "United States",
  city: "Los Angeles"
)

daniel1Post = Post.new(title: "Beach B/W", poster_id: daniel_user.id, description: "")
daniel2Post = Post.new(title: "Cheesin in Davis", poster_id: daniel_user.id, description: "")
daniel3Post = Post.new(title: "Beach flying", poster_id: daniel_user.id, description: "")
daniel4Post = Post.new(title: "How's my Nixon impression?", poster_id: daniel_user.id, description: "")
davis1Post = Post.new(title: "b0red", poster_id: gabby_user.id, description: "")
davis2Post = Post.new(title: "The Talking Heads", poster_id: gabby_user.id, description: "")
dazedPost = Post.new(title: "Woah", poster_id: daniel_user.id, description: "")
gabbyPost = Post.new(title: "Supreme Queen", poster_id: gabby_user.id, description: "")
gpaPost = Post.new(title: "Yikes", poster_id: daniel_user.id, description: "")
griffithPost = Post.new(title: "Thats a nice wallpaper", poster_id: kevin_user.id, description: "")
kristePost = Post.new(title: "Ayyyyy", poster_id: kevin_user.id, description: "")
littletokyoPost = Post.new(title: "City scapes", poster_id: kevin_user.id, description: "")
palacePost = Post.new(title: "Woah", poster_id: kevin_user.id, description: "")
sdPost = Post.new(title: "The water's fine", poster_id: daniel_user.id, description: "")
smPost = Post.new(title: "POP", poster_id: kevin_user.id, description: "")
sm1Post = Post.new(title: "When you need more photos", poster_id: kevin_user.id, description: "")
topanga1Post = Post.new(title: "You put the lime in the coconut", poster_id: kevin_user.id, description: "")
topanga2Post = Post.new(title: "Mild mannered postcard", poster_id: kevin_user.id, description: "")
tornPost = Post.new(title: "Torn", poster_id: kevin_user.id, description: "")
tunnelPost = Post.new(title: "Ok so you're going to walk through this tunnel...", poster_id: daniel_user.id, description: "")

beachPost = Post.new(title: "Summer Breeze", poster_id: kevin_user.id, description: "")
canyonPost = Post.new(title: "Canyon", poster_id: gabby_user.id, description: "")
muricaPost = Post.new(title: "Peekaboo", poster_id: kevin_user.id, description: "")
tracksPost = Post.new(title: "To where", poster_id: kevin_user.id, description: "")
surfsupPost = Post.new(title: "Surfs up", poster_id: gabby_user.id, description: "")
monkPost = Post.new(title: "In another life", poster_id: kevin_user.id, description: "")
nosotrosPost = Post.new(title: "Nosotros", poster_id: gabby_user.id, description: "")
hashtagPost = Post.new(title: "Hashtag", poster_id: gabby_user.id, description: "")
grafittiPost = Post.new(title: "Fine print", poster_id: gabby_user.id, description: "")
ningunoPost = Post.new(title: "Ninguno", poster_id: gabby_user.id, description: "")
trippyPost = Post.new(title: "Cherry-coloured Funk", poster_id: kevin_user.id, description: "")
trishaPost = Post.new(title: "Trisha", poster_id: daniel_user.id, description: "")
liesPost = Post.new(title: "Makes you wonder", poster_id: gabby_user.id, description: "")
stairsPost = Post.new(title: "Where do they lead", poster_id: gabby_user.id, description: "")
daniel10Post = Post.new(title: "Lousiana", poster_id: daniel_user.id, description: "")
mardigrasPost = Post.new(title: "Mardigras awaits", poster_id: daniel_user.id, description: "")
soakPost = Post.new(title: "Soakin in the sun", poster_id: daniel_user.id, description: "")
hangloosePost = Post.new(title: "Hangloose", poster_id: gabby_user.id, description: "")
sunsetPost = Post.new(title: "Almost golden hour", poster_id: daniel_user.id, description: "")
daniel5Post = Post.new(title: "Stay awhile", poster_id: daniel_user.id, description: "")

beachPost.photo.attach(io: beach, filename: "beach.jpg")
canyonPost.photo.attach(io: canyon, filename: "canyon.jpg")
muricaPost.photo.attach(io: murica, filename: "murica.jpg")
tracksPost.photo.attach(io: tracks, filename: "tracks.jpg")
surfsupPost.photo.attach(io: surfsup, filename: "surfsup.jpg")
monkPost.photo.attach(io: monk, filename: "monk.jpg")
nosotrosPost.photo.attach(io: nosotros, filename: "nosotros.jpg")
hashtagPost.photo.attach(io: hashtag, filename: "hashtag.jpg")
grafittiPost.photo.attach(io: grafitti, filename: "grafitti.jpg")
ningunoPost.photo.attach(io: ninguno, filename: "ninguno.jpg")
trippyPost.photo.attach(io: trippy, filename: "trippy.jpg")
trishaPost.photo.attach(io: trisha, filename: "trisha.jpg")
liesPost.photo.attach(io: lies, filename: "lies.jpg")
stairsPost.photo.attach(io: stairs, filename: "stairs.jpg")
daniel10Post.photo.attach(io: daniel10, filename: "daniel10.jpg")
mardigrasPost.photo.attach(io: mardigras, filename: "mardigras.jpg")
soakPost.photo.attach(io: soak, filename: "soak.jpg")
hangloosePost.photo.attach(io: hangloose, filename: "hangloose.jpg")
sunsetPost.photo.attach(io: sunset, filename: "sunset.jpg")
daniel5Post.photo.attach(io: daniel5, filename: "daniel5.jpg")

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

beachPost.save!
canyonPost.save!
muricaPost.save!
tracksPost.save!
surfsupPost.save!
monkPost.save!
nosotrosPost.save!
hashtagPost.save!
grafittiPost.save!
ningunoPost.save!
trippyPost.save!
trishaPost.save!
liesPost.save!
stairsPost.save!
daniel10Post.save!
mardigrasPost.save!
soakPost.save!
hangloosePost.save!
sunsetPost.save!
daniel5Post.save!
