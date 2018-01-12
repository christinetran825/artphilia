class Artwork < ApplicationRecord
  belongs_to :artist
  has_many :artwork_medium
  has_many :media, through: :artwork_medium

  before_validation :make_title_case

  validates_presence_of :title, :exhibition, :user_owned, :comments, :rating
  validates :signed, :original, presence: true, :allow_blank => true

  has_attached_file :images, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :images, content_type: /\Aimage\/.*\z/

  def make_title_case
    self.title = self.title.titlecase
    self.exhibition = self.exhibition.titlecase
  end

  def media_attributes=(medium_attributes)
    medium_attributes.values.each do |medium_attr|
      if !medium_attr[:name].blank?
        medium = Medium.find_or_create_by(medium_attr)
          self.media << medium
      end
    end
  end

end
