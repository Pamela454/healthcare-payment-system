class AddCvcToPayment < ActiveRecord::Migration[6.0]
  def change
    add_column :payments, :cvc, :integer
  end
end
