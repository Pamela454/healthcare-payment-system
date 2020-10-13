class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts do |t|
      t.string :name
      t.string :password_digest 
      t.integer :balance
      t.integer :copay
      t.string :insurance

      t.timestamps
    end
  end
end
