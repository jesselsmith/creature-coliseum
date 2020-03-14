class EncounterSerializer
  include FastJsonapi::ObjectSerializer
  attributes :difficulty, :xp, :adjusted_xp, :title, :xp_per_player
  has_many :players
  has_many :monsters
end
