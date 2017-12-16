class CreatePlaces < ActiveRecord::Migration[5.1]
  def change
    create_table :places do |t|
      t.string :name
      t.string :website
      t.string :season
      t.string :event_type
      t.integer :rating

      t.timestamps
    end
  end
end
