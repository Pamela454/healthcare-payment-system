class AddExpirationToPayment < ActiveRecord::Migration[6.0]
  def change
    add_column :payments, :expiration, :integer
  end
end
