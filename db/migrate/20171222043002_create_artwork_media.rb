class CreateArtworkMedia < ActiveRecord::Migration[5.1]
  def change
    create_table :artwork_media do |t|
      t.integer :artwork_id
      t.integer :medium_id
      t.timestamps
    end
  end
end
