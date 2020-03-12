class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :level
      t.integer :initiative_bonus
      t.references :encounter

      t.timestamps
    end
  end
end
