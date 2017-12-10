class ArtworksController < ApplicationController

  before_action :set_artwork, only: [:show, :edit, :update, :destroy]

  def index
    @artworks = Artwork.all
  end

  def new
    @artwork = Artwork.new
    @artist = Artist.find(params[:artist_id]) #find the parent
    # @media = Medium.all
  end

  def create
    @artist = Artist.find(params[:artist_id]) #find the parent
    @artwork = @artist.artworks.build(artwork_params)
    if @artwork && @artwork.save
      flash[:success] = "#{@artwork.title} added"
      redirect_to artist_path(@artist)
    else
      flash.now[:error] = "Please enter all fields"
      render :new
    end
  end

  def show
    # @artist = Artist.new
  end

  def edit
  end

  def update
    if @artwork.update(artwork_params)
      flash[:success] = "#{@artwork.title} was updated"
      redirect_to artist_path(@artist)
    else
      render :edit
    end
  end

  def destroy
    @artwork.delete
    flash[:success] = "#{@artwork.title} was deleted"
    redirect_to artworks_path
  end

  private

    def set_artwork
      @artwork = Artwork.find(params[:id])
    end

    def artwork_params
      params.require(:artwork).permit(:title, :exhibition, :user_owned, :signed, :original, :rating, :comments, :medium)
      #medium_id:[], :media_attributes => [:id, :name]
    end

end
