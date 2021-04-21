class Account < ApplicationRecord
	enum status: [:patient, :admin] #keep track of user role 
	has_secure_password #already validates presence 
    validates :name, uniqueness: true
	has_many :departments
	has_many :payments 
	accepts_nested_attributes_for :departments, :payments 
	validates :name, :password, :status, presence: true

	#need method to update the account balance

 after_initialize do #default value is patient 
   if self.new_record?
     self.status ||= :patient 
   end
 end

 def payments_attributes=(payments_attributes)
 	binding.pry 
		self.balance = self.balance - payments_attributes.amount  
        if self.balance >= 1
        	self.save
        elsif self.balance < 1
        	return 'Payment cannot be processed'
        end
 end 
	
end
