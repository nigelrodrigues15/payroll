json.extract! payslip, :id, :employee_id, :regular_hours, :overtime_hours, :created_at, :updated_at
json.url payslip_url(payslip, format: :json)
