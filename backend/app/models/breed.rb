class Breed < ApplicationRecord
  has_many :monsters
  has_many :encounters, through: :monsters
  scope :spellcaster, -> { where(spellcaster: true) }
  scope :filter_by_monster_type, -> (monster_type) { where(monster_type: monster_type) }
  scope :filter_by_size, -> (size) { where(size: size) }
  scope :filter_by_cr, -> (min_cr, max_cr) { where(cr: min_cr..max_cr) }
  scope :filter_by_ac, -> (min_ac, max_ac) { where(ac: min_ac..max_ac) }
  scope :filter_by_attack_bonus, -> (min_attack_bonus, max_attack_bonus) { where(attack_bonus: min_attack_bonus..max_attack_bonus) }
  
  def self.search( search_hash )

  end
end
