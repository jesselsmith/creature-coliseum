class EncounterSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :difficulty, :xp, :adjusted_xp, :xp_per_player, :average_player_level
  has_many :players
  has_many :monsters
end
