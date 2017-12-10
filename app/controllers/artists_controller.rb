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
      flash[:success] = "#{@artist.name} added"
      redirect_to artists_path(@artist)
    else
      flash.now[:error] = "Please enter all fields"
      render :new
    end
  end

  def show
    @artwork = @artist.artworks

  end

  def edit
  end

  def update
    if @artist.update(artist_params)
      flash[:success] = "#{@artist.name} was updated"
      redirect_to artist_path(@artist)
    else
      render :edit
    end
  end

  def destroy
    @artist.delete
    flash[:success] = "#{@artist.name} was deleted"
    redirect_to artists_path
  end

  private

    def set_artist
      @artist = Artist.find(params[:id])
    end

    def artist_params
      params.require(:artist).permit(:name, :website, :discovered, :rating, :notes)
    end

end
