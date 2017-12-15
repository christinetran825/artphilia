class Artwork < ApplicationRecord
  belongs_to :artist
  belongs_to :medium

  before_validation :make_title_case

  validates_presence_of :title, :exhibition, :user_owned, :signed, :original, :comments, :medium
  validates :rating, presence: true, numericality: { less_than: 6 }

  def make_title_case
    self.title = self.title.titlecase
    self.exhibition = self.exhibition.titlecase
  end

  def medium_attributes=(medium)
    self.medium = Medium.find_or_create_by(medium)
    self.medium.update(medium)
  end

end
