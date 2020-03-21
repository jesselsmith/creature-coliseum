class MonsterSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :cr, :initiative_bonus, :url
  belongs_to :encounter
  belongs_to :breed
end
