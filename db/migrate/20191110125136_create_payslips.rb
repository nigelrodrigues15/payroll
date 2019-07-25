class CreatePayslips < ActiveRecord::Migration[6.0]
  def change
    create_table :payslips do |t|
      t.integer :employee_id, null: false
      t.integer :payment_date, null: false
      t.integer :pay_end_date, null: false
      t.float :regular_hours, null: false
      t.float :overtime_hours, null: false
      t.float :holiday_pay, null: false
      t.float :performance_incentive, null: false
      t.float :vacation_pay, null: false
      t.float :employer_health_benefit_contributions, null: false
      t.float :employee_health_benefit_contributions, null: false
      t.float :ei, null: false
      t.float :cpp, null: false
      t.float :total_tax_deduction, null: false
      t.float :total_earnings, null: false
      t.float :total_deductions, null: false
      t.float :y2d_net_pay, null: false
      t.float :pay_check, null: false

      t.timestamps
    end

    add_index :payslips, :employee_id, unique: true

  end
end
