class Medium < ApplicationRecord
  has_many :artworks #medium's plural is media
  has_many :artists, through: :artworks #medium's plural is media

  before_validation :make_title_case
  validates :name, presence: true, uniqueness: true

  def make_title_case
    self.name = self.name.titlecase
  end
end
