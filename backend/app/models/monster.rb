class Monster < ApplicationRecord
  belongs_to :encounter

  def xp()
    case self.cr
    when '0'
      10
    when '1/8'
      25
    when '1/4'
      50
    when '1/2'
      100
    when '1'
      200
    when '2'
      450
    when '3'
      700
    when '4'
      1100
    when '5'
      1800
    when '6'
      2300
    when '7'
      2900
    when '8'
      3900
    when '9'
      5000
    when '10'
      5900
    when '11'
      7200
    when '12'
      8400
    when '13'
      10_000
    when '14'
      11_500
    when '15'
      13_000
    when '16'
      15_000
    when '17'
      18_000
    when '18'
      20_000
    when '19'
      22_000
    when '20'
      25_000
    when '21'
      33_000
    when '22'
      41_000
    when '23'
      50_000
    when '24'
      62_000
    when '25'
      75_000
    when '26'
      90_000
    when '27'
      105_000
    when '28'
      120_000
    when '29'
      135_000
    when '30'
      155_000
    else
      0
    end
  end
end
