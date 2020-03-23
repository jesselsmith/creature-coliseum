class BreedSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :url, :monster_type, :size_category, :ac, :attack_bonus, :spellcaster
  has_many :monsters

  attribute :cr, &:monster_cr
end
