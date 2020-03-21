# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_21_130227) do

  create_table "breeds", force: :cascade do |t|
    t.string "name"
    t.string "url"
    t.string "monster_type"
    t.string "cr"
    t.string "size_category"
    t.integer "ac"
    t.integer "attack_bonus"
    t.boolean "spellcaster"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "encounters", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "monsters", force: :cascade do |t|
    t.string "cr"
    t.integer "initiative_bonus"
    t.string "url"
    t.string "name"
    t.integer "encounter_id"
    t.integer "breed_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["breed_id"], name: "index_monsters_on_breed_id"
    t.index ["encounter_id"], name: "index_monsters_on_encounter_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.integer "level"
    t.integer "initiative_bonus"
    t.integer "encounter_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["encounter_id"], name: "index_players_on_encounter_id"
  end

end
