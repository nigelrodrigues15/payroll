# == Schema Information
#
# Table name: payslips
#
#  id                                    :bigint           not null, primary key
#  cpp                                   :float
#  ei                                    :float
#  employee_health_benefit_contributions :float
#  employer_health_benefit_contributions :float
#  holiday_pay                           :float
#  overtime_hours                        :float
#  pay_check                             :float
#  pay_end_date                          :integer
#  payment_date                          :integer
#  performance_incentive                 :float
#  regular_hours                         :float
#  total_deductions                      :float
#  total_earnings                        :float
#  total_tax_deduction                   :float
#  vacation_pay                          :float
#  y2d_net_pay                           :float
#  created_at                            :datetime         not null
#  updated_at                            :datetime         not null
#  employee_id                           :integer          not null
#
# Indexes
#
#  index_payslips_on_employee_id  (employee_id)
#

require 'test_helper'

class PayslipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
