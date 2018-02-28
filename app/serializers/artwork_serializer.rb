class ArtworkSerializer < ActiveModel::Serializer
  attributes :id, :title, :exhibition, :user_owned, :signed, :original, :rating, :comments, :images, medium_ids:[], :media_attributes => [:id, :name, :_destroy]
  has_many :media
  belongs_to :artist
end
