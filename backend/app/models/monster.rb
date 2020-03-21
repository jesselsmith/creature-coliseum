class Monster < ApplicationRecord
  belongs_to :encounter
  belongs_to :breed
  
  def xp()
    xp_table = [10, 25, 50, 100, 200, 450, 700, 1100, 1800, 2300, 2900, 3900,
      5000, 5900, 7200, 8400, 10_000, 11_500, 13_000, 15_000, 18_000, 20_000,
      22_000, 25_000, 33_000, 41_000, 50_000, 62_000, 75_000, 90_000, 105_000,
      120_000, 135_000, 155_000]
    if self.cr == '0'
      xp_table[0]
    elsif self.cr == '1/8'
      xp_table[1]
    elsif self.cr == '1/4'
      xp_table[2]
    elsif self.cr == '1/2'
      xp_table[3]
    elsif (1..30).include?(self.cr.to_i)
      xp_table[self.cr.to_i + 3]
    else
      0
    end
  end
end
