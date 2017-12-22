class Medium < ApplicationRecord
  has_many :artwork_medium
  has_many :artworks, through: :artwork_medium

  before_validation :make_title_case
  validates :name, presence: true, uniqueness: true

  def make_title_case
    self.name = self.name.titlecase
  end
end
