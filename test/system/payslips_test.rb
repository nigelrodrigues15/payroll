require "application_system_test_case"

class PayslipsTest < ApplicationSystemTestCase
  setup do
    @payslip = payslips(:one)
  end

  test "visiting the index" do
    visit payslips_url
    assert_selector "h1", text: "Payslips"
  end

  test "creating a Payslip" do
    visit payslips_url
    click_on "New Payslip"

    fill_in "Employee", with: @payslip.employee_id
    fill_in "Overtime hours", with: @payslip.overtime_hours
    fill_in "Regular hours", with: @payslip.regular_hours
    click_on "Create Payslip"

    assert_text "Payslip was successfully created"
    click_on "Back"
  end

  test "updating a Payslip" do
    visit payslips_url
    click_on "Edit", match: :first

    fill_in "Employee", with: @payslip.employee_id
    fill_in "Overtime hours", with: @payslip.overtime_hours
    fill_in "Regular hours", with: @payslip.regular_hours
    click_on "Update Payslip"

    assert_text "Payslip was successfully updated"
    click_on "Back"
  end

  test "destroying a Payslip" do
    visit payslips_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Payslip was successfully destroyed"
  end
end
