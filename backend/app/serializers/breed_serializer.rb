class BreedSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :url, :monster_type, :size_category, :ac, :attack_bonus, :spellcaster
  has_many :monsters

  attribute :cr do |object|
    object.cr.to_r.to_s
  end
end
