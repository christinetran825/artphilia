# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171216012645) do

  create_table "artists", force: :cascade do |t|
    t.string "name"
    t.string "website"
    t.string "discovered"
    t.integer "rating"
    t.string "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["user_id"], name: "index_artists_on_user_id"
  end

  create_table "artworks", force: :cascade do |t|
    t.string "title"
    t.string "exhibition"
    t.string "medium"
    t.string "user_owned"
    t.string "signed"
    t.string "original"
    t.integer "rating"
    t.string "comments"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "artist_id"
    t.integer "medium_id"
    t.index ["artist_id"], name: "index_artworks_on_artist_id"
    t.index ["medium_id"], name: "index_artworks_on_medium_id"
  end

  create_table "media", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "places", force: :cascade do |t|
    t.string "name"
    t.string "website"
    t.string "season"
    t.string "event_type"
    t.integer "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["user_id"], name: "index_places_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "uid"
  end

end
