class CreatePayments < ActiveRecord::Migration[6.0]
  def change
    create_table :payments do |t|
      t.integer :amount
      t.integer :department_id
      t.timestamps
    end
  end
end
