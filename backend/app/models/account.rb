class Account < ApplicationRecord
	has_many :departments
	validates :name, :balance, :insurance, presence: true

	#need method to update the account balance
	
end
