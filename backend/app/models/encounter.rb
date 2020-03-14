class Encounter < ApplicationRecord

  has_many :players
  has_many :monsters

  def xp
    self.monsters.sum(&:xp)
  end

  def adjusted_xp
    if self.players.size <= 0
      self.xp
    else
      adjustment_table = [0.5, 1, 1.5, 2, 2.5, 3, 4, 5]
      table_index = 1
      if self.players.size < 3
        table_index += 1
      elsif self.players.size >= 6
        table_index -= 1
      end
      buckets = [14, 10, 6, 2, 1, 0]
      table_index += 5 - buckets.index { |bucket| self.monsters.size > bucket }
      self.xp * adjustment_table[table_index]
    end
  end


  def difficulty_thresholds
    difficulty_table = [
      [0, 0, 0, 0],
      [100, 75, 50, 25],
      [200, 150, 100, 50],
      [400, 225, 150, 75],
      [500, 375, 250, 125],
      [1100, 750, 500, 250],
      [1400, 900, 600, 300],
      [1700, 1100, 750, 350],
      [2100, 1400, 900, 450],
      [2400, 1600, 1100, 550],
      [2800, 1900, 1200, 600],
      [3600, 2400, 1600, 800],
      [4500, 3000, 2000, 1000],
      [5100, 3400, 2200, 1100],
      [5700, 3800, 2500, 1250],
      [6400, 4300, 2800, 1400],
      [7200, 4800, 3200, 1600],
      [8800, 5900, 3900, 2000],
      [9500, 6300, 4200, 2100],
      [10900, 7300, 4900, 2400],
      [12700, 8500, 5700, 2800]
    ] 

    thresholds = [0, 0, 0, 0]
    thresholds.map.with_index do |xp, difficulty|
      self.players.sum { |player| difficulty_table[player.level][difficulty] }
    end
  end

  def difficulty
    diff = self.difficulty_thresholds().index { |difficulty| self.adjusted_xp >= difficulty }
    diff_name = ['Deadly', 'Hard', 'Medium', 'Easy']
    if diff == nil
      'Easy'
    else
      diff_name[diff]
    end
  end

  def xp_per_player
    self.xp / self.players.size
  end
end
