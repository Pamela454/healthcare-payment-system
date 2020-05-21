class AddFieldsToAccounts < ActiveRecord::Migration[6.0]
  def change
    add_column :accounts, :cardfirstname, :string
    add_column :accounts, :cardlastname, :string
    add_column :accounts, :creditcardnumber, :integer
    add_column :accounts, :expiration, :integer
    add_column :accounts, :cvv, :integer
  end
end
