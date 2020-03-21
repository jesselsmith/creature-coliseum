class Breed < ApplicationRecord
  has_many :monsters
  has_many :encounters, through: :monsters
end
