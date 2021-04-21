class Payment < ApplicationRecord
    belongs_to :account
	validates :amount, :account_id, :cardnumber, :expiration, :cvc, presence: true

end
