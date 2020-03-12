class CreateMonsters < ActiveRecord::Migration[6.0]
  def change
    create_table :monsters do |t|
      t.integer :cr
      t.integer :initiative_bonus
      t.string :url
      t.string :name

      t.timestamps
    end
  end
end
