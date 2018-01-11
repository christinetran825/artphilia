class Artists::FavoritesController < ApplicationController

  def index
    @artists = current_user.artists.where(rating: 5).order(:name)
  end

end
