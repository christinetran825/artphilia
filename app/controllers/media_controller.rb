class MediaController < ApplicationController

  # before_action :set_medium, only: [:show, :edit, :update, :destroy]
  # before_action :find_the_parent
  #
  # def index
  #   @media = Medium.all
  # end
  #
  # def new
  #   @medium = Medium.new
  # end
  #
  # def create
  #   @medium = @artwork.media.build(media_params)
  #   if @medium && @medium.save
  #     flash[:success] = "#{@medium.name} added"
  #     redirect_to artist_path(@artist)
  #   else
  #     flash.now[:danger] = "Please enter a medium"
  #     render :new
  #   end
  # end
  #
  # def show
  # end
  #
  # def edit
  # end
  #
  # def update
  #   if @medium.update(media_params)
  #     flash[:notice] = "#{@medium.name} was updated"
  #   end
  # end
  #
  # def destroy
  #   @medium.delete
  # end
  #
  # private
  #
  #   def find_the_parent
  #     @artwork = Artwork.find(params[:artwork_id]) #find the parent
  #   end
  #
  #   def set_medium
  #     @medium = Medium.find(params[:id])
  #   end
  #
  #   def media_params
  #     params.require(:medium).permit(:name)
  #   end

end
