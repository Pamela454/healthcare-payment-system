class Payment < ApplicationRecord
    belongs_to :account
	validates :amount, :account_id, :cardnumber, :expiration, :cvc, presence: true
	validates :cardnumber, length: { is: 16 }
	validates :cvc, length: { is: 3 }
	validates :expiration, numericality: true 
	before_save :check_and_update_balance

	def check_and_update_balance
	   @account = Account.find_by(id: self.account_id)
	   @departments = Department.find_by(account_id: self.account_id)
    if @account.balance >= self.amount
       @account.update_attribute(:balance, @account.balance - self.amount)
    end
    #if @departments != null && @departments != undefined 
    	#map over departments and check balance of each. subtract from first element and then move on to next element as necessary 
  end
end
