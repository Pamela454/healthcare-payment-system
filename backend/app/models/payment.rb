class Payment < ApplicationRecord
    belongs_to :account
	validates :amount, :account_id, presence: true

	def new_balance(payment)
		self.balance = self.balance - payment.amount 
        if self.balance >= 1
        	self.save
        elsif self.balance < 1
        	return 'Payment cannot be processed'
        end
	end
end
