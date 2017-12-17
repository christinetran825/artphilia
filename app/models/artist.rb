class Artist < ApplicationRecord
  belongs_to :user
  has_many :artworks
  has_many :media, through: :artworks

  before_validation :make_title_case

  validates_presence_of :name, :website, :discovered, :rating
  
  def make_title_case
    self.name = self.name.titlecase
    self.discovered = self.discovered.titlecase
  end
end
