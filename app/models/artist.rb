class Artist < ApplicationRecord
  belongs_to :user
  has_many :artworks, :dependent => :destroy
  has_many :media, through: :artworks

  before_validation :make_title_case, :make_website

  VALID_WEBSITE_REGEX = /(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/

  validates_presence_of :name, :discovered, :rating
  validates :website, presence: true

  def make_title_case
    self.name = self.name.titlecase
    self.discovered = self.discovered.titlecase
  end

  def make_website
    if self.website != VALID_WEBSITE_REGEX && self.website.blank?
      self.website = "None"
    elsif self.website != VALID_WEBSITE_REGEX && !self.website.blank?
      self.website = "http://#{website}"
    else
      self.website
    end
  end

end
