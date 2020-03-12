class AddTitleToEncounters < ActiveRecord::Migration[6.0]
  def change
    add_column :encounters, :title, :string
  end
end
