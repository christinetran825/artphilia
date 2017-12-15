class ArtistsController < ApplicationController

  before_action :set_artist, only: [:show, :edit, :update, :destroy]

  def index
    @artists = Artist.all
  end

  def new
    @artist = Artist.new
  end

  def create
    @artist = Artist.new(artist_params)
    @artist.user = current_user
    if @artist && @artist.save
      redirect_to artists_path(@artist), flash: {success: "'#{@artist.name}' was added!"}
    else
      render :new, flash: {danger: "Please enter all fields"}
    end
  end

  def show
    @artwork = @artist.artworks
  end

  def edit
  end

  def update
    if @artist.update(artist_params)
      redirect_to artist_path(@artist), flash: {success: "'#{@artist.name}' was updated!"}
    else
      render :edit
    end
  end

  def destroy
    @artist.delete
    redirect_to artists_path, flash: {success: "'#{@artist.name}' was deleted!"}
  end

  private

    def set_artist
      @artist = Artist.find(params[:id])
    end

    def artist_params
      params.require(:artist).permit(:name, :website, :discovered, :rating, :notes)
    end

end
