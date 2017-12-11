class ArtworksController < ApplicationController

  before_action :set_artwork, only: [:show, :edit, :update, :destroy]
  before_action :find_the_parent

  def index
    @artworks = Artwork.all
  end

  def new
    @artwork = Artwork.new
  end

  def create
    @artwork = @artist.artworks.build(artwork_params)
    if @artwork && @artwork.save
      flash[:success] = "#{@artwork.title} added"
      redirect_to artist_path(@artist)
    else
      flash.now[:danger] = "Please enter all fields"
      render :new
    end
  end

  def show
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
    redirect_to artist_path(@artist)
  end

  private
    def find_the_parent
      @artist = Artist.find(params[:artist_id]) #find the parent
    end

    def set_artwork
      @artwork = Artwork.find(params[:id])
    end

    def artwork_params
      params.require(:artwork).permit(:title, :exhibition, :user_owned, :signed, :original, :rating, :comments, medium_ids:[], :medium_attributes => [:id, :name, :_destroy])
    end

end
