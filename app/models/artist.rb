class Artist < ApplicationRecord
  belongs_to :user
  has_many :artworks, :dependent => :destroy
  has_many :media, through: :artworks

  before_validation :make_title_case, :make_website

  validates_presence_of :name, :discovered, :rating
  VALID_WEBSITE_REGEX = /(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/
  validates :website, presence: true, format: { with: VALID_WEBSITE_REGEX }

  def make_title_case
    self.name = self.name.titlecase
    self.discovered = self.discovered.titlecase
  end

  def make_website
    if self.website != VALID_WEBSITE_REGEX
      self.website = "http://#{website}"
    else
      self.website
    end
  end

end
