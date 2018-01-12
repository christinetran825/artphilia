class ArtworksController < ApplicationController

  before_action :set_artwork, only: [:show, :edit, :update, :destroy]
  before_action :find_the_artist

  def index
    @artworks = Artwork.all
  end

  def new
    @artwork = Artwork.new
  end

  def create
    @artwork = @artist.artworks.build(artwork_params)
    if @artwork && @artwork.save
      redirect_to artist_artwork_path(@artist, @artwork), flash: {success: "'#{@artwork.title}' was added!"}
    else
      render :new, flash: {danger: "Please enter all fields"}
    end
  end

  def show
  end

  def edit
  end

  def update
    if @artwork.update(artwork_params)
      redirect_to artist_artwork_path(@artist, @artwork), flash: {success: "'#{@artwork.title}' was updated!"}
    else
      render :edit
    end
  end

  def destroy
    @artwork.delete
    redirect_to artist_path(@artist), flash: {success: "'#{@artwork.title}' was deleted!"}
  end

  private
    def find_the_artist
      @artist = Artist.find(params[:artist_id]) #find the parent
    end

    def set_artwork
      @artwork = Artwork.find(params[:id])
    end

    def artwork_params
      params.require(:artwork).permit(:title, :exhibition, :user_owned, :signed, :original, :rating, :comments, :images, medium_ids:[], :media_attributes => [:id, :name, :_destroy])
    end

end
