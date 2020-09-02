class Account < ApplicationRecord
	has_many :departments
	has_many :payments 
	validates :name, :balance, presence: true

	#need method to update the account balance
	
end
