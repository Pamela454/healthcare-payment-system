class Account < ApplicationRecord
	enum status: [:patient, :admin] #keep track of user role 
	has_secure_password #already validates presence 
    validates :name, uniqueness: true
	has_many :departments
	has_many :payments 
	accepts_nested_attributes_for :departments, :payments 
	after_initialize :set_defaults

	def set_defaults
		self.balance ||= 0   #if nil, set default 
	end

 #after_initialize do #default value is patient 
   #if self.new_record?
    # self.status ||= :patient 
  # end
 #end
	
end
