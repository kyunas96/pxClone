class Post < ApplicationRecord
  validates :title, presence: true
  validate :ensure_photo_attached

  has_one_attached :photo
  
  def ensure_photo_attached
    unless self.photo.attached?
      errors[:photo] << 'must be attached'
    end
  end
end
