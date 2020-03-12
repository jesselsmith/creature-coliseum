class PlayerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :level, :initiative_bonus
  belongs_to :encounter
end
