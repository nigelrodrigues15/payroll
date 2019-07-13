class CreateEmployees < ActiveRecord::Migration[6.0]
  def change
    create_table :employees do |t|
      t.string :name
      t.string :province
      t.float :wage
      t.integer :start_date
      t.integer :end_date

      t.timestamps
    end
  end
end
