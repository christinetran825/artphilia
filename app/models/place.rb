class Place < ApplicationRecord
  belongs_to :user

  validates_presence_of :fair, :gallery
  validates :rating, presence: true, numericality: { less_than: 6 }

  def make_title_case
    self.fair = self.fair.titlecase
    self.gallery = self.gallery.titlecase
  end

end
