class CreateBreeds < ActiveRecord::Migration[6.0]
  def change
    create_table :breeds do |t|
      t.string :name
      t.string :url
      t.string :monster_type
      t.string :cr
      t.string :size
      t.integer :ac
      t.integer :attack_bonus
      t.boolean :spellcaster

      t.timestamps
    end
  end
end
