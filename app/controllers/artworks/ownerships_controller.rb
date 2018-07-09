class Artworks::OwnershipsController < ApplicationController

  def index
    @artworks = Artwork.where(artist_id: current_user.artist_ids, user_owned: "Yes")
    respond_to do |f|
      f.html
      f.json {render json: @artworks}
    end
  end

end
