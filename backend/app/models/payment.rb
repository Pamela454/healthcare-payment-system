class Payment < ApplicationRecord
    belongs_to :account
	validates :amount, :account_id, :cardnumber, :expiration, :cvc, presence: true
	validates :cardnumber, length: { is: 16 }
	validates :cvc, length: { is: 3 }
	validates :expiration, numericality: true 
	before_save :check_and_update_balance, :check_and_update_departments

	def check_and_update_balance
	   		@account = Account.find_by(id: self.account_id)
	   		@departments = Department.find_by(account_id: self.account_id)
    	if  @account.balance >= self.amount
       		@account.update_attribute(:balance, @account.balance - self.amount)
    	end
    end
    #doesn't work with multiple values 
  	def check_and_update_departments
  	  	binding.pry
  	 	while @departments != nil 
  	 		binding.pry
  	 		@departments.update_attribute(:charge, @departments.charge - self.amount)
  	 		if self.amount == 0
  	 			break
  	 		end
  	 	end
  	end
end

