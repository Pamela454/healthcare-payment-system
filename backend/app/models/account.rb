class Account < ApplicationRecord
	enum status: [:patient, :admin] #keep track of user role 
	has_secure_password #already validates presence 
    validates :name, uniqueness: true
	has_many :departments
	has_many :payments 
	validates :name, :password, :status, presence: true

	#need method to update the account balance

 after_initialize do #default value is patient 
   if self.new_record?
     self.status ||= :patient 
   end
 end
	
end
