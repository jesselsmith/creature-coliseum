class Breed < ApplicationRecord
  has_many :monsters
  has_many :encounters, through: :monsters
  scope :filter_by_name, -> (name) { where("name like ?", "%#{name}%")}
  scope :filter_by_spellcaster, -> (spellcaster) { where(spellcaster: spellcaster) }
  scope :filter_by_monster_type, -> (monster_type) { where(monster_type: monster_type) }
  scope :filter_by_size_category, -> (size_category) { where(size_category: size_category) }
  scope :filter_by_cr, -> (min_cr, max_cr) { where(cr: min_cr..max_cr) }
  scope :filter_by_ac, -> (min_ac, max_ac) { where(ac: min_ac..max_ac) }
  scope :filter_by_attack_bonus, -> (min_attack_bonus, max_attack_bonus) { where(attack_bonus: min_attack_bonus..max_attack_bonus) }
  
  def self.search( search_hash )
    breeds = Breed.where(nil)
    filtering_params(search_hash).each do |key, value|
      breeds = breeds.send("filter_by_#{key}", value) if value.present?
    end
    breeds
  end
  
  private
  
  def filtering_params(params)
    params.slice(:spellcaster, :monster_type, :size_category, :cr, :ac, :attack_bonus)
  end
end
