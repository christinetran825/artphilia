class CreateArtworks < ActiveRecord::Migration[5.1]
  def change
    create_table :artworks do |t|
      t.string :title
      t.string :exhibition
      t.string :medium
      t.string :user_owned
      t.string :signed
      t.string :original
      t.integer :rating
      t.string :comments
      
      t.timestamps
    end
  end
end
