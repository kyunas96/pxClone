class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true
  attr_reader :password
  
  after_initialize :ensure_session_token

  # SPIRE

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    if user && user.is_password?(pw)
      return user
    else
      return nil
    end
  end

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
end