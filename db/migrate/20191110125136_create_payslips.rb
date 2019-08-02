class CreatePayslips < ActiveRecord::Migration[6.0]
  def change
    create_table :payslips do |t|
      t.integer :employee_id, null: false
      t.integer :payment_date
      t.integer :pay_end_date
      t.float :regular_hours
      t.float :overtime_hours
      t.float :holiday_pay
      t.float :performance_incentive
      t.float :vacation_pay
      t.float :employer_health_benefit_contributions
      t.float :employee_health_benefit_contributions
      t.float :ei
      t.float :cpp
      t.float :total_tax_deduction
      t.float :total_earnings
      t.float :total_deductions
      t.float :y2d_net_pay
      t.float :pay_check

      t.timestamps
    end

    add_index :payslips, :employee_id

  end
end
