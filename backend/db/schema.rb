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

ActiveRecord::Schema.define(version: 2020_05_21_133440) do

  create_table "accounts", force: :cascade do |t|
    t.string "name"
    t.integer "balance"
    t.integer "copay"
    t.string "insurance"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "cardfirstname"
    t.string "cardlastname"
    t.integer "creditcardnumber"
    t.integer "expiration"
    t.integer "cvv"
  end

  create_table "departments", force: :cascade do |t|
    t.string "service"
    t.integer "charge"
    t.integer "account_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end