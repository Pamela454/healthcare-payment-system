class AddCardnumberToPayment < ActiveRecord::Migration[6.0]
  def change
    add_column :payments, :cardnumber, :integer
  end
end
