class AddImagesToArtworks < ActiveRecord::Migration[5.1]
  def up
    add_attachment :artworks, :images
  end

  def down
    remove_attachment :artworks, :images
  end
end
