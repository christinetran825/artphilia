class ArtistsController < ApplicationController

  before_action :set_artist, only: [:show, :edit, :update, :destroy]

  def index
    @artists = Artist.all
    @artists = current_user.artists.order(:name)
    respond_to do |f|
      f.html
      f.json {render json: @artists}
    end
  end

  def new
    @artist = Artist.new
  end

  def create
    @artist = Artist.new(artist_params)
    @artist.user = current_user
    if @artist && @artist.save
      respond_to do |f|
        f.html {redirect_to artist_path(@artist), flash: {success: "'#{@artist.first_name} #{@artist.last_name}' was added!"}}
        f.json {render json: @artist}
      end
    else
      render :new, flash: {danger: "Please enter all fields"}
    end
  end

  def show
    @artwork = @artist.artworks
    respond_to do |f|
      f.html
      f.json { render json: @artist }
    end
  end

  def edit
  end

  def update
    if @artist.update(artist_params)
      respond_to do |f|
        f.html {redirect_to artist_path(@artist), flash: {success: "'#{@artist.first_name} #{@artist.last_name}' was updated!"}}
        f.json {render json: @artist}
      end
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
