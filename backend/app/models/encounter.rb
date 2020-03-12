class Encounter < ApplicationRecord

  has_many :players
  has_many :monsters

end
