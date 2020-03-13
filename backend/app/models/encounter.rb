class Encounter < ApplicationRecord

  has_many :players
  has_many :monsters

  def xp
    self.monsters.sum(&:xp)
  end

  def adjusted_xp
    adjustment_table = [0.5, 1, 1.5, 2, 2.5, 3, 4, 5]
    table_index = 1
    if self.players.size <= 3
      table_index += 1
    elsif self.players.size >= 6
      table_index -= 1
    end
    buckets = [14, 10, 6, 2, 1, 0]
    table_index += 5 - buckets.index { |bucket| self.monsters.size > bucket }
    
    self.xp * adjustment_table[table_index]
  end

end
