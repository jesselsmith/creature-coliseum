class Breed < ApplicationRecord
  has_many :monsters
  has_many :encounters, through: :monsters

  validates :name, uniqueness: true

  scope :filter_by_name, -> (name) { where("name like ?", "%#{name}%")}
  scope :filter_by_spellcaster, -> (spellcaster) { where(spellcaster: spellcaster) }
  scope :filter_by_monster_type, -> (monster_type) { where(monster_type: monster_type) }
  scope :filter_by_size_category, -> (size_category) { where(size_category: size_category) }
  scope :filter_by_min_cr, -> (min_cr) { where('cr >= ?', min_cr) }
  scope :filer_by_max_cr, -> (max_cr) { where('cr <= ?', max_cr) }
  scope :filter_by_min_ac, -> (min_ac) { where('ac >= ?', min_ac) }
  scope :filter_by_max_ac, -> (max_ac) { where('ac <= ?', max_ac) }
  scope :filter_by_min_attack_bonus, -> (min_attack_bonus) { where('attack_bonus >= ?', min_attack_bonus) }
  scope :filter_by_max_attack_bonus, -> (max_attack_bonus) { where('attack_bonus <= ?', max_attack_bonus) }


  def self.search(search_hash)
    breeds = Breed.all
    search_hash.each do |key, value|
      breeds = breeds.send("filter_by_#{key}", value) if value.present?
    end
    breeds
  end
end
