class CreateDepartments < ActiveRecord::Migration[6.0]
  def change
    create_table :departments do |t|
      t.string :name
      t.string :service
      t.integer :charge
      t.string :no-test-framework

      t.timestamps
    end
  end
end
