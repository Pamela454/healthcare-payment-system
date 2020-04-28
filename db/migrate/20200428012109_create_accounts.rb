class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts do |t|
      t.string :name
      t.integer :balance
      t.integer :copay
      t.string :insurance
      t.string :service
      t.integer :charge

      t.timestamps
    end
  end
end
