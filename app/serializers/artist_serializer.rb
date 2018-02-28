class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :website, :discovered, :rating, :notes, :user_id, :artworks
  # belongs_to :user

  private
    def artworks
      ArtworkSerializer.new(object.artworks).attributes
    end
end
