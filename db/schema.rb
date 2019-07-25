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

ActiveRecord::Schema.define(version: 2019_11_10_125136) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "employees", force: :cascade do |t|
    t.string "name", null: false
    t.string "province"
    t.float "wage", null: false
    t.integer "start_date"
    t.integer "end_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "payslips", force: :cascade do |t|
    t.integer "employee_id", null: false
    t.integer "payment_date", null: false
    t.integer "pay_end_date", null: false
    t.float "regular_hours", null: false
    t.float "overtime_hours", null: false
    t.float "holiday_pay", null: false
    t.float "performance_incentive", null: false
    t.float "vacation_pay", null: false
    t.float "employer_health_benefit_contributions", null: false
    t.float "employee_health_benefit_contributions", null: false
    t.float "ei", null: false
    t.float "cpp", null: false
    t.float "total_tax_deduction", null: false
    t.float "total_earnings", null: false
    t.float "total_deductions", null: false
    t.float "y2d_net_pay", null: false
    t.float "pay_check", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["employee_id"], name: "index_payslips_on_employee_id", unique: true
  end

end
