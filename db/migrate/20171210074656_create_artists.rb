class CreateArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :website
      t.string :discovered
      t.integer :rating
      t.string :notes

      t.timestamps
    end
  end
end
