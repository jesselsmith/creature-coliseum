class EncounterSerializer
  include FastJsonapi::ObjectSerializer
  attributes :difficulty, :xp, :title
  has_many :players
  has_many :monsters
end
