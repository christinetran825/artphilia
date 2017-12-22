class RemoveMediumFromArtworks < ActiveRecord::Migration[5.1]
  def change
    remove_column :artworks, :medium, :string
  end
end
