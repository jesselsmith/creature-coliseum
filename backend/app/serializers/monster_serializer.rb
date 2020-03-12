class MonsterSerializer
  include FastJsonapi::ObjectSerializer
  attributes :cr, :name, :initiative_bonus, :url
  belongs_to :encounter
end
