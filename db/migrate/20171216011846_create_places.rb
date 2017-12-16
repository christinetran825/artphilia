class CreatePlaces < ActiveRecord::Migration[5.1]
  def change
    create_table :places do |t|
      t.string :fair
      t.string :gallery
      t.integer :rating

      t.timestamps
    end
  end
end
