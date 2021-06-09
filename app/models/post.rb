class Post < ApplicationRecord
  validates :title, presence: true
  validate :ensure_photo_attatched

  has_one_attached :photo
  
  def ensure_photo_attached

  end
end
