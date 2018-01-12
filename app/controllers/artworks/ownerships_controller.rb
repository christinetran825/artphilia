class Artworks::OwnershipsController < ApplicationController

  def index
    @artworks = Artwork.where(artist_id: current_user.artist_ids, user_owned: "Yes")
  end

end
