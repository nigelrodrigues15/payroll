# == Schema Information
#
# Table name: employees
#
#  id         :bigint           not null, primary key
#  end_date   :integer
#  name       :string           not null
#  province   :string
#  start_date :integer
#  wage       :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class EmployeeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
