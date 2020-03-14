class EncounterSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :difficulty, :xp, :adjusted_xp, :xp_per_player
  has_many :players
  has_many :monsters
end
