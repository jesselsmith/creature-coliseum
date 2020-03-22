class CreateMonsters < ActiveRecord::Migration[6.0]
  def change
    create_table :monsters do |t|
      t.string :cr
      t.integer :initiative_bonus
      t.string :url
      t.string :name
      t.integer :breed_id
      t.references :encounter

      t.timestamps
    end
  end
end
