class ArtworkMedium < ApplicationRecord
  belongs_to :artwork
  belongs_to :medium
end
