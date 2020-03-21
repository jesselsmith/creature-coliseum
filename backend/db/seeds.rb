# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
require 'nokogiri'
require 'json'

breed_array = []

22.times do |i|
  doc = Nokogiri::HTML(URI.open("https://api.open5e.com/monsters/?page=#{i + 1}"))
  hash = JSON.parse(doc.at('p').text)
  breed_array += hash["results"]
end

def isSpellcaster?(breed)
  unless breed['special_abilities'].empty?
    breed['special_abilities'].any? do |ability|
      ability['name'].include?('Spellcasting')
    end
  end
end

def extract_to_hit_from_desc(desc)
  desc.slice((desc.index('+') + 1)...desc.index(' to hit, ')).to_i 
end

def attack_from_actions(actions)
  attacks = []
  unless actions.empty?
    actions.each do |action|
      if action.has_key? 'attack_bonus'
        attacks << action
      elsif action['desc'].include?(' to hit, ')
        attacks << action.merge({ "attack_bonus" => extract_to_hit_from_desc(action['desc']) })
      end
    end
  end
  attacks.max_by { |attack| [attack['attack_bonus']] } || {attack_bonus: 0, desc: 'Hit: 0'}
end

def make_config(breed)
  {
    name: breed['name'],
    url: "https://open5e.com/monsters/#{breed['slug']}",
    monster_type: breed['type'],
    cr: breed['challenge_rating'],
    size_category: breed['size'],
    ac: breed['armor_class'],
    spellcaster: isSpellcaster?(breed),
    attack_bonus: attack_from_actions(breed['actions'])['attack_bonus'] || 0
  }
end

breed_array.each do |breed|
  Breed.create(make_config(breed))
end

