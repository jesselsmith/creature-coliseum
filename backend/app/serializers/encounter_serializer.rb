class EncounterSerializer
  include FastJsonapi::ObjectSerializer
  attributes :difficulty, :xp
  has_many :players
  has_many :monsters
end
