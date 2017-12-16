class AddEventTypeToPlace < ActiveRecord::Migration[5.1]
  def change
    add_reference :places, :event_type, foreign_key: true
  end
end
