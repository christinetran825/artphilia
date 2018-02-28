class MediaSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :artwork
  # belongs_to :artwork_media
end
