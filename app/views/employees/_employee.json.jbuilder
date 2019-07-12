json.extract! employee, :id, :name, :province, :wage, :start_date, :end_date, :created_at, :updated_at
json.url employee_url(employee, format: :json)
