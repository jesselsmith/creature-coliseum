class BreedSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :url, :monster_type, :cr, :size, :ac, :attack_bonus, :spellcaster
  has_many :monsters
end
