class Department < ApplicationRecord
	belongs_to :account 
	validates :service, :charge, :account_id, presence: true
	
end
