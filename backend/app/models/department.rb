class Department < ApplicationRecord
	belongs_to :account 
	validates :name, :service, :charge, :account_id, presence: true
	


	#display all error messages
	#ability for admin and only admin to add a department and a charge
end
