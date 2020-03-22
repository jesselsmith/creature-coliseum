class BreedSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :url, :monster_type, :size_category, :ac, :attack_bonus, :spellcaster
  has_many :monsters

  attribute :cr do |object|
    if object.cr.to_r >= 1
      object.cr.to_i
    else
      object.cr.to_r
    end
  end
end
