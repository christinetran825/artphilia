class Artist < ApplicationRecord
  belongs_to :user

  before_validation :make_title_case

  validates_presence_of :name, :website, :discovered, :rating

  def make_title_case
    self.name = self.name.titlecase
  end
end
