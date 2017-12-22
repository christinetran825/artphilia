class AddArtworkToMedia < ActiveRecord::Migration[5.1]
  def change
    add_reference :media, :artwork, foreign_key: true
  end
end
