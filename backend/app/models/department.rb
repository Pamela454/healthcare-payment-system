class Department < ApplicationRecord
	belongs_to :account 
	validates :name, :service, :charge, :account_id, presence: true
	

	#needs method to adjust balance when updating a department 

	#signup button removed and login page link displays when on signup page
	#display all error messages
	#ability for admin and only admin to add a department and a charge
end
