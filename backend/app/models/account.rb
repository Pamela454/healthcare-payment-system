class Account < ApplicationRecord
	enum status: [:patient, :admin]
	has_secure_password 
	has_many :departments
	has_many :payments 
	validates :name, :password, presence: true

	#need method to update the account balance
	
end
