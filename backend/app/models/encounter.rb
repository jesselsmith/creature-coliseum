class Encounter < ApplicationRecord

  has_many :players
  has_many :monsters

  def xp()
    self.monsters.sum(&:xp)
  end

end
