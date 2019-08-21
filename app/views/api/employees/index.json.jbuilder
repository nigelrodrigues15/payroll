@employees.each do |employee|
    json.set! employee.id do
      json.extract! employee, :name, :wage, :province, :start_date, :end_date
    end
  end
