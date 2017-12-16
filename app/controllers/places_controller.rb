class PlacesController < ApplicationController

  before_action :set_place, only: [:show, :edit, :update, :destroy]

  def index
    @places = Place.all
    @places = current_user.places
  end

  def new
    @place = Place.new
  end

  def create
    @place = Place.new(place_params)
    @place.user = current_user
    if @place && @place.save
      redirect_to place_path(@place), flash: {success: "'#{@place.fair}' was added!"}
    else
      render :new, flash: {danger: "Please enter all fields"}
    end
  end

  def show
  end

  def edit
  end

  def update
    if @place.update(place_params)
      redirect_to place_path(@place), flash: {success: "'#{@place.fair}' was updated!"}
    else
      render :edit
    end
  end

  def destroy
    @place.delete
    redirect_to places_path, flash: {success: "'#{@place.fair}' was deleted!"}
  end

  private

    def set_place
      @place = Place.find(params[:id])
    end

    def place_params
      params.require(:place).permit(:fair, :gallery, :rating)
    end
end
