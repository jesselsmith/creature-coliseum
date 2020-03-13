class EncounterSerializer
  include FastJsonapi::ObjectSerializer
  attributes :difficulty, :xp, :adjusted_xp :title
  has_many :players
  has_many :monsters
end
