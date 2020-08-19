class Account < ApplicationRecord
	has_many :departments
	validates :name, :balance, :insurance, presence: true

	#need method to update the account balance
	def new_balance(payment)
		self.balance = self.balance - payment.amount 
        if self.balance >= 1
        	self.save
        elsif self.balance < 1
        	return 'Payment cannot be processed'
        end
	end
	
end
