class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  attr_reader :password

  after_initialize :ensure_session_token

  # SPIRE

  # def self.find_by_credentials(username, password)
  #   user = User.find_by(username: username)
  #   p user

  #   if user && user.is_password?(password)
  #     return user
  #   else
  #     return nil
  #   end
  # end

  def password=(pw)
    # saving the password into an instance variable makes it accessible to the
    # validator to check its length
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    test = BCrypt::Password.new(self.password_digest)
    test.is_password?(pw)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  has_many :received_follows,
    primary_key: :id,
    foreign_key: :followed_user_id,
    class_name: :Follow

  has_many :followers,
    through: :received_follows,
    source: :follower

  has_many :given_follows,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :followings,
    through: :given_follows,
    source: :followed_user

  has_one_attached :user_photo
  has_one_attached :banner_image

  has_many :posts,
    primary_key: :id,
    foreign_key: :poster_id,
    class_name: :Post

  def feed 
    following_ids = self.followings
    Posts.where()
  end
end
