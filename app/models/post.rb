class Post < ApplicationRecord
  validates :title, presence: true
  validate :ensure_photo_attached

  def ensure_photo_attached
    unless self.photo.attached?
      errors[:photo] << 'must be attached'
    end
  end

  has_one_attached :photo

  belongs_to :user,
    primary_key: :id,
    foreign_key: :poster_id,
    class_name: :User
end
