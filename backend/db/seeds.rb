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

monsterArray = []

# 22.times do |i|
#   doc = Nokogiri::HTML(URI.open("https://api.open5e.com/monsters/?page=#{i + 1}"))
#   hash = JSON.parse(doc.at('p').text)
#   monsterArray += hash["results"]
# end

def isSpellcaster?(monster)
  unless monster['special_abilities'].empty?
    monster['special_abilities'].any? do |ability|
      ability['name'].include?('Spellcasting')
    end
  end
end

def extract_to_hit_from_desc(desc)
  desc.slice((desc.index('+') + 1)...desc.index(' to hit, ')).to_i 
end

def attack_from_actions(actions)
  attacks = []
  
  actions.each do |action|
    if action.has_key? 'attack_bonus'
      attacks << action
    elsif action['desc'].include?(' to hit, ')
      attacks << action.merge({ "attack_bonus" => extract_to_hit_from_desc(action['desc']) })
    end
  end
  binding.pry
  attacks.max_by { |attack| [attack['attack_bonus']] } || {attack_bonus: 0, desc: 'Hit: 0'}
end


doc = Nokogiri::HTML(URI.open("https://api.open5e.com/monsters/abominable-beauty/"))
hash = JSON.parse(doc.at('p').text)

def make_config(monster)
  {
    name: monster['name'],
    url: "https://open5e.com/monsters/#{monster['slug']}",
    type: monster['type'],
    cr: monster['challenge_rating'],
    size: monster['size'],
    ac: monster['armor_class'],
    spellcaster: isSpellcaster?(monster),
    attack_bonus: attack_from_actions(monster['actions'])['attack_bonus'] || 0
  }
end

b = make_config(hash)

binding.pry

monster_array.each do |monster|
  configObj = {
    name: monster['name'],
    url: "https://open5e.com/monsters/#{monster['slug']}",
    type: monster['type'],
    cr: monster['challenge_rating'],
    size: monster['size'],
    ac: monster['armor_class'],
    spellcaster: isSpellcaster?(monster),
    attack_bonus: attack_from_actions(monster['actions'])['attack_bonus'] || 0
  }
  binding.pry
end

binding.pry

